class CitySerializer < ActiveModel::Serializer
  attributes :id, :name, :location
  has_many :service_requests
end
