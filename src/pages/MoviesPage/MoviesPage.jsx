import toast, { Toaster } from "react-hot-toast";
import css from "./MoviesPage.module.css";
import { searchMovies } from "../../js/requestsAPI";
import { useState } from "react";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setSearchMovies] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  async function handleSearch(evt) {
    evt.preventDefault();
    setLoader(true);
    const formElem = evt.currentTarget;
    const query = formElem.elements.name.value.trim("");

    if (query === "") {
      toast.error("Oops... Enter data to search");
    }
    try {
      const data = await searchMovies(query);
      setSearchMovies(data);
    } catch (error) {
      console.log(error);
    } finally {
      formElem.reset();
      setLoader(false);
    }
  }

  return (
    <header>
      <Toaster position="top-right" reverseOrder={true} />
      <form className={css.form} onSubmit={handleSearch}>
        <input
          className={css.input}
          type="text"
          name="name"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      {error && <NotFoundPage movies={movies} setError={setError} />}
      <MovieList movies={movies} statusLoader={loader} />
    </header>
  );
};
export default MoviesPage;
