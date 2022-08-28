class EventsController < ApplicationController

  def create
    user = User.find_by(id: session[:user_id])
    forest = user.character.location.find_by(name: 'forest')
    volcano = user.character.location.find_by(name: 'volcano')
    
    Event.create(location_id: forest.id, name: "Event One", description: "The first Forest event.", is_complete: false)
    Event.create(location_id: forest.id, name: "Event Two", description: "The second Forest event.", is_complete: false)
    Event.create(location_id: forest.id, name: "Event Three", description: "The third Forest event.", is_complete: false)
    Event.create(location_id: forest.id, name: "Event Four", description: "The fourth Forest event.", is_complete: false)

    Event.create(location_id: volcano.id, name: "Event One", description: "The first Volcano event.", is_complete: false)
    Event.create(location_id: volcano.id, name: "Event Two", description: "The second Volcano event.", is_complete: false)
    Event.create(location_id: volcano.id, name: "Event Three", description: "The third Volcano event.", is_complete: false)
    Event.create(location_id: volcano.id, name: "Event Four", description: "The fourth Volcano event.", is_complete: false)

    events = Event.all
    render json: events, status: :created
  end

end
