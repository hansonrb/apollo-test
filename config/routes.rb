Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  post "/graphql", to: "graphql#execute"
  devise_for :users
  root to: 'posts#index'

  resources :posts, only: %(show) do
    resources :comments, only: %(index)
  end
end
