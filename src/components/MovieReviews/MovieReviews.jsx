import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { getReviewsList } from "../../js/requestsAPI";
import Reviews from "../Reviews/Reviews";

const MovieReviews = () => {
  const moviesId = useParams();
  const movieId = moviesId.movieId.slice(1);
  const [loader, setLoader] = useState(false);
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        setLoader(true);
        const movieReviews = await getReviewsList(movieId);
        setReviewsList(movieReviews);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    handleSubmit();
  }, [movieId]);

  return (
    <>
      <Loader status={loader} />
      <Reviews reviewsList={reviewsList} />
    </>
  );
};
export default MovieReviews;
