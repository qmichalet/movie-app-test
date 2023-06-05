import { Movie } from "@/interfaces";
import { tmdbImageSrc } from "@/utils";

interface Props {
  movie: Movie;
  onClick: (movie: Movie) => Movie;
}

const MovieCard = (props: Props) => {
  const { movie, onClick } = props;

  return (
    <div onClick={() => onClick(movie)} className="card">
      <img
        alt={`${movie.title} poster`}
        src={tmdbImageSrc(movie.posterPath)}
        className="card__bg"
      />

      <div className="card__subcard">
        <h3 className="card__title">{movie.title}</h3>
        <p className="card__subtitle">{movie.releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;
