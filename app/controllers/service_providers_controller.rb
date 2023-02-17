class ServiceProvidersController < ApplicationController
  before_action :set_service_provider, only: [:show, :update, :destroy]

  # GET /service_providers
  def index
    service_providers = ServiceProvider.all
    render json: service_providers, status: :ok
  end

  # GET /service_providers/1
  def show
    render json: service_provider
  end

  # POST /service_providers
  def create
    service_provider = ServiceProvider.new(service_provider_params)

    if service_provider.save
      render json: service_provider, status: :created, location: service_provider
    else
      render json: service_provider.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /service_providers/1
  def update
    if service_provider.update(service_provider_params)
      render json: service_provider
    else
      render json: service_provider.errors, status: :unprocessable_entity
    end
  end

  # DELETE /service_providers/1
  def destroy
    service_provider.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_service_provider
      service_provider = ServiceProvider.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def service_provider_params
      params.require(:service_provider).permit(:name, :contact_info, :services_offered, :city)
    end
  end
