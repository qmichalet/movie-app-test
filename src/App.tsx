import axios from "axios";
import "@/styles/index.scss";
import { useEffect, useState } from "react";
import { formatResult } from "@/utils";
import Header from "@/components/Header";
import MovieList from "@/components/MovieList";
import HeroMovie from "@/components/HeroMovie";
import { Movie } from "./interfaces";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [heroMovie, setHeroMovie] = useState<Movie>();
  const [isHeroOpen, setIsHeroOpen] = useState(false);

  const api_url = "https://api.themoviedb.org/3/";
  const api_key = "41720d32bcd17fd6db5f91407675f9bb";

  useEffect(() => {
    getDefaultValues();
  }, []);

  const getDefaultValues = () => {
    axios
      .get(`${api_url}movie/now_playing?api_key=${api_key}`)
      .then((response) => {
        const { data } = response;
        setMovies(data.results.map((value: object) => formatResult(value)));
      });
  };

  const handleHeroClose = () => {
    setIsHeroOpen(false);
    // Question sur ce linter error :
    // L'argument de type '{}' n'est pas attribuable au paramètre de type 'SetStateAction<Movie | undefined>'.ts(2345)
    setHeroMovie({});
  };

  const handleMovieClick = (movie: Movie) => {
    const { id } = movie;

    axios.get(`${api_url}movie/${id}?api_key=${api_key}`).then((response) => {
      const { data } = response;
      if (data) {
        setHeroMovie(formatResult(data));
        setIsHeroOpen(true);
      }
    });
  };

  const handleSearch = (value: string) => {
    if (value === "") {
      getDefaultValues();
    } else {
      axios
        .get(`${api_url}search/movie?api_key=${api_key}&query=${value}`)
        .then((response) => {
          const { data } = response;
          if (data) {
            setMovies(data.results.map((value: object) => formatResult(value)));
          }
        });
    }
  };

  return (
    <>
      <Header onSubmit={handleSearch} />
      <div className="main-wrapper">
        {/* 
          Question sur ce linter-error: 
          Impossible d'assigner le type '(movie: Movie) => void' au type '(movie: Movie) => Movie'.
          Impossible d'assigner le type 'void' au type 'Movie'.ts(2322)
          MovieList.tsx(8, 3): Le type attendu provient de la propriété 'onClick', qui est déclarée ici sur le type 'IntrinsicAttributes & Props'
        */}
        <MovieList
          onClick={handleMovieClick}
          className={isHeroOpen ? "shade" : ""}
          movies={movies}
        />
        {heroMovie && isHeroOpen && (
          <HeroMovie onClick={handleHeroClose} movie={heroMovie} />
        )}
      </div>
    </>
  );
}

export default App;
