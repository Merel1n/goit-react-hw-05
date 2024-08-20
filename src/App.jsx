import { Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import AppBar from "./components/AppBar/AppBar";

const App = () => {
  const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
  const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
  const MovieDetailsPage = lazy(() =>
    import("./pages/MovieDetailsPage/MovieDetailsPage")
  );
  const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

  return (
    <>
      <AppBar />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="MovieCast" />
            <Route path="MovieReviews" />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
