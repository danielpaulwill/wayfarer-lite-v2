class OptionsController < ApplicationController

  def create
    user = User.find_by(id: session[:user_id])
    # user = User.find(4)
    character = user.character

    forest = character.locations.find_by(name: "Forest")
    volcano = character.locations.find_by(name: "Volcano")

    f1 = forest.events.first
    f2 = forest.events.second
    f3 = forest.events.third
    f4 = forest.events.fourth
    
    f1o1 = Option.create(event_id: f1.id, name: "Option 1", description: "The first option of the first Forest event.", is_complete: false)
    f1o2 = Option.create(event_id: f1.id, name: "Option 2", description: "The second option of the first Forest event.", is_complete: false)
    
    f2o1 = Option.create(event_id: f2.id, name: "Option 1", description: "The first option of the second Forest event.", is_complete: false)
    f2o2 = Option.create(event_id: f2.id, name: "Option 2", description: "The second option of the second Forest event.", is_complete: false)
    
    f3o1 = Option.create(event_id: f3.id, name: "Option 1", description: "The first option of the third Forest event.", is_complete: false)
    f3o2 = Option.create(event_id: f3.id, name: "Option 2", description: "The second option of the third Forest event.", is_complete: false)
    
    f4o1 = Option.create(event_id: f4.id, name: "Option 1", description: "The first option of the fourth Forest event.", is_complete: false)
    f4o2 = Option.create(event_id: f4.id, name: "Option 2", description: "The second option of the fourth Forest event.", is_complete: false)
    
    v1 = volcano.events.first
    v2 = volcano.events.second
    v3 = volcano.events.third
    v4 = volcano.events.fourth

    v1o1 = Option.create(event_id: v1.id, name: "Option 1", description: "The first option of the first Volcano event.", is_complete: false)
    v1o2 = Option.create(event_id: v1.id, name: "Option 2", description: "The second option of the first Volcano event.", is_complete: false)

    v2o1 = Option.create(event_id: v2.id, name: "Option 1", description: "The first option of the second Volcano event.", is_complete: false)
    v2o2 = Option.create(event_id: v2.id, name: "Option 2", description: "The second option of the second Volcano event.", is_complete: false)

    v3o1 = Option.create(event_id: v3.id, name: "Option 1", description: "The first option of the third Volcano event.", is_complete: false)
    v3o2 = Option.create(event_id: v3.id, name: "Option 2", description: "The second option of the third Volcano event.", is_complete: false)

    v4o1 = Option.create(event_id: v4.id, name: "Option 1", description: "The first option of the fourth Volcano event.", is_complete: false)
    v4o2 = Option.create(event_id: v4.id, name: "Option 2", description: "The second option of the fourth Volcano event.", is_complete: false)

    options = Option.all

    # byebug
    if options.valid?
    render json: options, status: :created
    else
      render json: { errors: f1o1.errors.full_messages }, status: :unprocessable_entity
    end
  end

end

