class CityController < ApplicationController
  def show
    city = City.find(params[:id])
    render json: city, serializer: CitySerializer
  end
end
