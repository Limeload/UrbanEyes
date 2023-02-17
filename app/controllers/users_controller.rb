class UsersController < ApplicationController
  skip_before_action :authorize, only: :create, :show

  def index
    user = User.all
    render json: user, status: :ok
  end

  def create
    user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
  end

  def show
    if params[:id]
      render json: User.find(params[:id]), status: :ok
  else
      render json: @current_user, status: :ok
  end
  end

  def update
    if user.update(user_params)
      render json: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    user.destroy
  end

  private
  def user_params
    params.permit(:username, :password, :email)
  end
end
