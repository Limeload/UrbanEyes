class ServiceRequestSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :status
  belongs_to :city
end
