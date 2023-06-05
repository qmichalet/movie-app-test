import { Movie } from "@/interfaces";
import moment from "moment";

export const formatResult = (obj: any): Movie => {
  return {
    id: obj.id,
    title: obj.title || obj.name,
    description: obj.overview,
    coverPath: obj.backdrop_path,
    posterPath: obj.poster_path,
    rating: obj.vote_average,
    releaseYear: moment(obj.release_date).format("YYYY"),
    runtime: obj.runtime
  };
};

export const tmdbImageSrc = (path: string) => {
  if (!path) return "";

  return `https://image.tmdb.org/t/p/original/${path}`;
};

export const convertNumberInDuration = (n: number) => {
  const num = n;
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);

  return `${rhours}h${rminutes}`;
};
