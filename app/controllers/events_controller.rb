class EventsController < ApplicationController

  def create
    user = User.find_by(id: session[:user_id])
    forest = user.character.location.find_by(name: 'forest')
    volcano = user.character.location.find_by(name: 'volcano')
    
    f1 = Event.create(location_id: forest.id, name: "Event One", description: "The first Forest event.", is_complete: false)
    f2 = Event.create(location_id: forest.id, name: "Event Two", description: "The second Forest event.", is_complete: false)
    f3 = Event.create(location_id: forest.id, name: "Event Three", description: "The third Forest event.", is_complete: false)
    f4 = Event.create(location_id: forest.id, name: "Event Four", description: "The fourth Forest event.", is_complete: false)

    v1 = Event.create(location_id: volcano.id, name: "Event One", description: "The first Volcano event.", is_complete: false)
    v2 = Event.create(location_id: volcano.id, name: "Event Two", description: "The second Volcano event.", is_complete: false)
    v3 = Event.create(location_id: volcano.id, name: "Event Three", description: "The third Volcano event.", is_complete: false)
    v4 = Event.create(location_id: volcano.id, name: "Event Four", description: "The fourth Volcano event.", is_complete: false)

    if (f1 && f2 && f3 && f4 && v1 && v2 && v3 && v4).valid?
    events = Event.all
    render json: events, status: :created
    else
      render json: { errors: f1.errors.full_messages }, status: :unprocessable_entity
    end
  end

end
