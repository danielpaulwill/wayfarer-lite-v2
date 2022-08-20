Rails.application.routes.draw do
  resources :attributes
  resources :characters
  resources :events
  resources :items
  resources :locations
  resources :options
  resources :users, except: :show
  get '/me', to: 'users#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
