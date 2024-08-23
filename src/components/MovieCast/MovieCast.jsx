import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { getCastList } from "../../js/requestsAPI";
import Cast from "../Cast/Cast";

const MovieCast = () => {
  const moviesId = useParams();
  const movieId = moviesId.movieId.slice(1);
  const [loader, setLoader] = useState(false);
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        setLoader(true);
        const movieCredits = await getCastList(movieId);
        setCastList(movieCredits.cast);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };
    handleSubmit();
  }, [movieId]);
  console.log("castList", castList);

  return (
    <>
      <Loader status={loader} />
      <Cast castList={castList} />
    </>
  );
};
export default MovieCast;
