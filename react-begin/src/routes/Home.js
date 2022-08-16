import { useState, useEffect } from "react";
import ShowMovie from "../components/ShowMovie";

function Home(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
   getMovies();
  }, []);
  console.log(movies);
  return (  
    <div>
      {loading ? (
      <h1>loading...</h1> 
      ) : (
      <div>
        {movies.map(movie => (
          <ShowMovie 
            // key는 React.js에서만, map안에서 componet들을 render할 때 사용한다. 
            key={movie.id} 
            id={movie.id}
            coverImg={movie.medium_cover_image} 
            title={movie.title} 
            summary={movie.summary} 
            genres={movie.genres}/>
      ))}
      </div>
      )}
    </div>
  )
}

export default Home;