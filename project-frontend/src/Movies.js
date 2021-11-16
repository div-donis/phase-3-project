import { useState, useEffect } from "react";
import AddRating from "./AddRating"

function Movies({movie}) {
    const [ratings, setRatings] = useState([{}]);

    useEffect(() => {
        fetch("http://localhost:9292/ratings")
          .then((res) => res.json())
          .then((data) => setRatings(data))
          .catch(console.error);
      }, []);

    const rating_matches = ratings.filter((rating) => rating.movie_id === movie.id)

    const rating_array = rating_matches.map((rating_match) => rating_match.rating)

    console.log(rating_array)

    let sum = 0;

    for (let i = 0; i < rating_array.length; i++) {
        sum += rating_array[i];
    }
    const fixed_dec = sum.toFixed(2);

    const average_rating = (fixed_dec / rating_array.length).toFixed(2)

    const [newRating, setNewRating] = useState(0)

    function handleSubmit(e) {
       
        fetch(`http://localhost:9292/ratings`, {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                rating: newRating,
                movie_id: movie.id
            })
        })
        setNewRating(0);
    }

    function handleDelete(e) {
        fetch(`http://localhost:9292/movies/${movie.id}`, {
            method: "delete",
        })
        function refreshPage() {
            window.location.reload(false);
          }
        refreshPage()
    }

  return (
    <div className="movies">
      <div className="card">
        <div className="sub-card">
          <div className="cover"><img alt={movie.name} src={movie.cover}></img></div>
        </div>
        <ul className="list">
            <li className="name">{movie.name}</li>
            <li className="director">Director: {movie.director}</li>
            <li className="rating">Rating: {isNaN(average_rating) ? "-" : average_rating}/10</li>
            <li><AddRating setNewRating={setNewRating} handleSubmit={handleSubmit}/></li>
        </ul>
        <button className="delete" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Movies;
