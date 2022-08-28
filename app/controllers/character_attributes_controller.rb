class CharacterAttributesController < ApplicationController

  def create
    user = User.find_by(id: session[:user_id])
    health = CharacterAttribute.create(character_id: user.character.id, name: "Health", quantity: params[:health])
    evil = CharacterAttribute.create(character_id: user.character.id, name: "Evil", quantity: params[:evil])
    strength = CharacterAttribute.create(character_id: user.character.id, name: "Strength", quantity: params[:strength])
    defense = CharacterAttribute.create(character_id: user.character.id, name: "Defense", quantity: params[:defense])
    luck = CharacterAttribute.create(character_id: user.character.id, name: "Luck", quantity: params[:luck])
    if health.valid? && evil.valid? && strength.valid? && defense.valid? && luck.valid?
      all_attributes = CharacterAttribute.all
      render json: all_attributes, status: :created
    else
      render json: { errors: "Please select a profession" }, status: :unprocessable_entity
    end
  end

  def index
    all_attributes = CharacterAttribute.all
    render json: all_attributes
  end

end
