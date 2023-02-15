class Citizen < ApplicationRecord
  belongs_to :city
  has_many :service_requests
  validates :username, presence: true
  validates :username, length: { minimum: 6, maximum: 20 }
  validates :email, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP}
  has_secure_password
  validates :password, confirmation: true
  validates :password, length: { minimum: 8 }
end
