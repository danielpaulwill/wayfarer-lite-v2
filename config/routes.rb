Rails.application.routes.draw do
  resources :character_attributes
  resources :characters
  resources :events
  resources :items
  resources :locations
  resources :options
  resources :users, except: :show
  get '/me', to: 'users#show'
  post '/me', to: 'sessions#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/character-attributes', to: 'character_attributes#create'
  post "/locations-select", to: 'locations#select'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
