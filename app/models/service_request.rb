class ServiceRequest < ApplicationRecord
  belongs_to :city
  belongs_to :service
  belongs_to :citizen
  validates :title, :description, :city_id, :service_id, :citizen_id, presence: true
  validates :title, length: { in: 3..100 }
  validates :title, uniqueness: true
  validates :description, length: { minimum: 10 }
  validates :service_id, numbericality: { only_integer: true }
  validate :service_present
  validates :status, inclusion: { in: ['open', 'closed', 'in_progress'] }
  validates :citizen_id, presence: true
  validate :validate_citizen

  private
  def service_present
    unless Service.exists?(service_id)
      errors.add(:service_id, "Service #{service_id} does not exist")
  end

  def validate_citizen
    citizen = Citizen.find_by(id: self.citizen_id)
    errors.add(:citizen_id, "citizen #{citizen_id} not found") unless citizen
  end
end
