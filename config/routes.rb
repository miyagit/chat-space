Rails.application.routes.draw do
  devise_for :users
  root 'messages#index'
  get 'groups/new' => 'groups#new'
  post 'groups/'   => 'groups#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
