import { useEffect, useState } from "react";
import MovieCast from "../../components/MovieCast/MovieCast";
import { getMoviesById } from "../../js/requestsAPI";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    try {
      setLoader(true);
      async function handleOpenMovieById(movieId) {
        const data = await getMoviesById(movieId);
        setMovie(data);
      }
      handleOpenMovieById(movieId);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  }, [movieId]);

  console.log(movie);
  return (
    <>
      <div>Now showing product with id - </div>;
      <MovieCast statusLoader={loader} />
    </>
  );
};
export default MovieDetailsPage;
