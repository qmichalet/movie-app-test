import { Movie } from "@/interfaces";
import { convertNumberInDuration, tmdbImageSrc } from "@/utils";
import { FaTimes } from "react-icons/fa";

interface Props {
  movie: Movie;
  onClick: () => void;
}

const HeroMovie = (props: Props) => {
  const { movie, onClick } = props;

  return (
    <div className="hero__wrapper">
      <div className="hero__btn-wrapper">
        <button onClick={onClick} className="hero__btn-wrapper__btn">
          <FaTimes />
        </button>
        <div
          style={{ backgroundImage: `url(${tmdbImageSrc(movie.coverPath)})` }}
          className="hero__cover"
        />
        <div className="hero__details">
          <h3 className="hero__title">{movie.title}</h3>
          <p className="hero__subtitle">
            {movie.releaseYear} - {convertNumberInDuration(movie.runtime)}
          </p>
          <p className="hero__description">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroMovie;
