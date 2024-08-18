import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { productId } = useParams();
  return <div>Now showing product with id - {productId}</div>;
};
export default MovieDetailsPage;
