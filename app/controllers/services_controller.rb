class ServicesController < ApplicationController
  before_action :authenticate_user!

  def index
    @services = Service.all
    render json: @services
  end

  def show
    @service = Service.find(params[:id])
    render json: @service
  end

  def create
    @service = Service.new(service_params)

    if @service.save
      render json: @service, status: :created, location: @service
    else
      render json: @service.errors, status: :unprocessable_entity
    end
  end

  def update
    @service = Service.find(params[:id])

    if @service.update(service_params)
      render json: @service
    else
      render json: @service.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @service = Service.find(params[:id])
    @service.destroy
  end

  private

  def service_params
    params.require(:service).permit(:name, :description, :category, :city_id)
  end
end
