class LocationsController < ApplicationController

  def create
    user = User.find_by(id: session[:user_id])
    forest = Location.create(character_id: user.character.id, name: "Forest", description: "A deep green, lush rainforest. It seems inviting, yet you can feel it holds danger.", is_complete: false)
    volcano = Location.create(character_id: user.character.id, name: "Volcano", description: "A giant, smoking mountain lay before you. It feels warmer the closer you get to it.", is_complete: false)
    locations = Location.all
    render json: locations, status: :created
  end

  def index
    locations = Location.all
    render json: locations
  end

end
