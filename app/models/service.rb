class Service < ApplicationRecord
  belongs_to :city
  has_many :service_requests
  validates :name, presence: true, length: { minimum: 2, maximum: 50 }
  validates :description, presence: true, length: { minimum: 10, maximum: 500 }
  # validates :category, presence: true, inclusion: { in: %w(Transportation Health Education Environment) }
  validates :category, presence: true
  validates :city_id, presence: true
end
