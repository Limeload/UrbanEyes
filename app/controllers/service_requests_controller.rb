class ServiceRequestsController < ApplicationController
  before_action :set_service_request, only: [:show, :edit, :update, :destroy]

  def index
    service_requests = ServiceRequest.all
    render json: service_requests, status: :ok
  end

  def show
  end

  def new
    service_request = ServiceRequest.new
  end

  def edit
  end

  def create
    service_request = ServiceRequest.new(service_request_params)
    if service_request.save
      redirect_to service_request, notice: 'Service request was successfully created.'
    else
      render :new
    end
  end

  def update
    if service_request.update(service_request_params)
      redirect_to service_request, notice: 'Service request was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    service_request.destroy
    redirect_to service_requests_url, notice: 'Service request was successfully destroyed.'
  end

  private
    def set_service_request
      service_request = ServiceRequest.find(params[:id])
    end

    def service_request_params
      params.require(:service_request).permit(:title, :description, :city_id, :service_id, :citizen_id, :status)
    end
end
