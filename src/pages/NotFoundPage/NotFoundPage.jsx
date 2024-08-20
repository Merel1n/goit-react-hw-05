import { Link } from "react-router-dom";

export const NotFoundPage = (movies, setError) => {
  if (movies.length === 0) {
    setError(true);
    return (
      <>
        <h2>Not Found</h2>
        <Link to="/">Home</Link>
      </>
    );
  }
};
