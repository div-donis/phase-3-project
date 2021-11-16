class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/movies" do
    Movie.all.to_json
  end
  
  get "/movies/:id" do
    movie = Movie.find(params[:id])
    movie.to_json
  end

  get "/ratings" do
    Rating.all.to_json
  end

  post "/ratings" do
    rating = Rating.create(
      rating: params[:rating],
      movie_id: params[:movie_id]
    )
    rating.to_json
  end

  post '/movies' do
    movie = Movie.create(
      name: params[:name],
      director: params[:director],
      cover: params[:cover]
    )
    movie.to_json
  end

  delete '/movies/:id' do
    movie = Movie.find(params[:id])
    movie.destroy
    movie.to_json
  end
end
