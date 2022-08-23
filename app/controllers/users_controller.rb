class UsersController < ApplicationController

  def create
    # byebug
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    user = User.find_by(id: session[:user_id])
    # byebug
    if user
      render json: user, status: :ok
    else
      render json: { error: "Not Authorized" }, status: :unauthorized
    end
  end

  def index
    users = User.all
    render json: users
  end

  def destroy
    user = User.find_by(id: params[:id])
    user.destroy
    render json: "deleted", status: :accepted
  end



  private

  def user_params
    params.permit(:username, :password, :password_digest, :password_confirmation)
  end

end
