import MovieCard from "./MovieCard";
import { Movie } from "../interfaces";

interface Props {
  movies: Movie[];
  className: string;
  title: string;
  onClick: (movie: Movie) => Movie;
}

// ici je passe onClick comme tous mes autres props sans soucis 
const MovieList = (props: Props) => {
  const { movies, onClick } = props;

  return (
    <div className={props.className}>
      <h2 className="list-title">In theaters</h2>
      <div className="movies-container">
        {movies.map((movie: Movie) => (
          <MovieCard onClick={onClick} key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
