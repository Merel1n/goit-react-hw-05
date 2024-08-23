import { useEffect, useState } from "react";
import { getMoviesById } from "../../js/requestsAPI";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import MovieCard from "../../components/MovieCard/MovieCard";
import GoBack from "../../components/GoBack/GoBack";

const MovieDetailsPage = () => {
  const moviesId = useParams();
  const movieId = moviesId.movieId.slice(1);
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoader(true);
        const data = await getMoviesById(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    fetchMovie();
  }, [movieId]);
  const isMovie = Boolean(movie);

  return (
    <>
      <Loader status={loader} />
      {!loader && <GoBack />}
      {isMovie && <MovieCard movie={movie} />}
    </>
  );
};
export default MovieDetailsPage;
