Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :cities, only: [:index, :show] do
  resources :services, only: [:index, :show]
  end
  resources :citizens, only: [:create, :index, :show, :update , :destroy]
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/signup", to: "sessions#create"
  post "/dashboard", to: "sessions#create"
  get "/me", to: "citizens#show"
  resources :service_requests, only: [:create, :index, :show, :update , :destroy]
  resources :service_providers, only: [:create, :index, :show, :update, :destroy]

end
