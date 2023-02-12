class ServiceProvider < ApplicationRecord
  belongs_to :city
  validates :name, presence: true
  validates :contact_info, presence: true
  validates :services_offered, presence: true
  validates :city, presence: true
end
