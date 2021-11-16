import "./App.css";
import NavBar from "./NavBar";
import Movies from "./Movies";
import Plate from "./Plate";
import AddMovie from "./AddMovie";
import { useState, useEffect } from "react";

export default function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [movies, setMovies] = useState([{}]);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);


  useEffect(() => {
    fetch("http://localhost:9292/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch(console.error);
  }, []);

  return (
    <div className="App" data-theme={darkMode ? "dark" : "light"}>
      <Plate />
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <div className="dashboard">
        <AddMovie /> 
        {movies.map((movie) =>(
          <Movies key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  );
}