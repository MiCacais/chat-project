Rails.application.routes.draw do
  resources :messages
  resources :rooms
  mount_devise_token_auth_for 'User', at: 'auth'
  mount ActionCable.server => '/cable'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
