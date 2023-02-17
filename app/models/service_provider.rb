class ServiceProvider < ApplicationRecord
  belongs_to :city
  has_many :service_requests
  has_many :services, through: :service_providers_services
  validates :name, presence: true
  validates :contact_info, presence: true
  validates :services_offered, presence: true
  validates :city, presence: true
end
