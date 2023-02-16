class UsersController < ApplicationController
  skip_before_action :authorize, only: :create, :show

  def index
    user = User.all
    render json: user, status: :ok
  end

  def create
    user  = User.create!(user_params)
    session[:user_id] = user.id
    if user.save
    render json: user, status: :created, location: user
    else
      render json: user.errors, status: :unprocessable_entity
  end

  def show
    render json: @current_user
  end

  def update
    if user.update(user_params)
      render json: user
    else
      render json: user.errors, status: :unprocessable_entity
  end

  def destroy
    user.destroy
  end

  private
  def user_params
    params.permit(:username, :password, :email)
  end
end
