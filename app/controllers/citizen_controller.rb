class CitizenController < ApplicationController
  skip_before_action :authorize, only: :create, :show

  def index
    @citizen = Citizen.all
    render json: @citizen, status: :ok
  end

  def create
    @citizen = Citizen.create!(citizen_params)
    session[:citizen_id] = @citizen.id
    if @citizen.save
    render json: @citizen, status: :created, location: @citizen
    else
      render json: @citizen.errords, status: :unprocessable_entity
  end

  def show
    render json: @current_user
  end

  def update
    if @citizen.update(citizen_params)
      render json: @citizen
    else
      render json: @citizen.errords, status: :unprocessable_entity
  end

  def destroy
    @citizen.destroy
  end

  private
  def citizen_params
    params.permit(:username, :password, :email)
  end
end
