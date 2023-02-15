class ServiceRequestsController < ApplicationController
  before_action :set_service_request, only: [:show, :update, :destroy]

  def index
    @service_requests = ServiceRequest.all
    render json: @service_requests
  end

  def show
    render json: @service_request
  end

  def create
    @service_request = ServiceRequest.new(service_request_params)

    if @service_request.save
      render json: @service_request, status: :created, location: @service_request
    else
      render json: @service_request.errors, status: :unprocessable_entity
    end
  end

  def update
    if @service_request.update(service_request_params)
      render json: @service_request
    else
      render json: @service_request.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @service_request.destroy
  end

  private

  def set_service_request
    @service_request = ServiceRequest.find(params[:id])
  end

  def service_request_params
    params.require(:service_request).permit(:title, :description, :status, :user_id, :city_id)
  end
end
