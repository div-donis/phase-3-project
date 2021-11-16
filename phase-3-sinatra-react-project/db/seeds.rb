require 'rest-client'
require 'faker'

puts "🌱 Seeding..."

movies = ["dune", "outside+the+wire", "bliss", "awake", "reminiscence", "chaos+walking", "free+guy", "settlers", "zone+414", "the+mitchells+vs.+the+machines"]

movies.each do |m|

    response = RestClient.get "https://omdbapi.com/?apikey=b59f1177&t=#{m}&y=2021"

    m_hash = JSON.parse(response)

    Movie.create(
        name:m_hash["Title"],
        director:m_hash["Director"],
        cover:m_hash["Poster"]
    )
end

50.times do

    Rating.create(
        rating: Faker::Number.between(from: 1.0, to: 10.0),
        movie_id: Faker::Number.between(from: 1, to: 10)
    )
end

puts "✅ Done seeding!"
