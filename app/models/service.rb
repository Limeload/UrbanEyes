class Service < ApplicationRecord
  belongs_to :city
  has_many :service_requests
  has_many :service_providers, through: :service_providers_services
  validates :name, presence: true
  validates :description, presence: true, length: { minimum: 10, maximum: 500 }
  validates :category, presence: true
  validates :city_id, presence: true
end
