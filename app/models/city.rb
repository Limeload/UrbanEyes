class City < ApplicationRecord
  has_many :users
  has_many :services
  validates :name, presence: true
  validates :location, presence: true
  validates :location , format: { with: /\A-?\d{1,3}\.\d{1,6},-?\d{1,3}\.\d{1,6}\z/ }
end
