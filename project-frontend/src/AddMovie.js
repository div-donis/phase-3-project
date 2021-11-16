import { useState } from "react";

function AddMovie() {

    const [newMovieName, setNewMovieName] = useState("");
    const [newMovieDirector, setNewMovieDirector] = useState("");
    const [newMovieCover, setNewMovieCover] = useState("");
    

    function handleSubmitMovie(e) {
       
        fetch(`http://localhost:9292/movies`, {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: newMovieName,
                director: newMovieDirector,
                cover: newMovieCover
            })
        })
        setNewMovieName("");
        setNewMovieDirector("");
        setNewMovieCover("");
      }
  return (
    <div className="add-movie">
      <div>
          Add a Movie:
        <form className="movie-form" onSubmit={handleSubmitMovie}>
          <input
            className="form-input"
            type="text"
            placeholder="Title"
            onChange={(e) => setNewMovieName(e.target.value)}
            required
          />
          <input
            className="form-input"
            type="text"
            placeholder="Director"
            onChange={(e) => setNewMovieDirector(e.target.value)}
            required
          />
          <input
            className="form-input"
            type="text"
            placeholder="Image URL"
            onChange={(e) => setNewMovieCover(e.target.value)}
            required
          />
          <input className="add-movie-submit" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default AddMovie;