class SessionsController < ApplicationController
  skip_before_Action :authorize, only: :create

  def create
    @citizen = Citizen.find_by(username: params[:username])
    if @citizen&.authenticate(params[:password])
      session[:citizen_id] = @citizen.id
      render json: @citizen
    else
      render json: {error: {"Please user an existing username or password"}}, status: :unauthorized
    end
  end

  def destroy
    session.delete(:citizen_id)
    head :no_content
  end

end
