import { NavLink, Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import clsx from "clsx";
import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
HomePages;
MoviePages;
MovieDetailsPage;
NotFoundPages;

function App() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movie" className={buildLinkClass}>
          Movie
        </NavLink>
        <NavLink to="/details" className={buildLinkClass}>
          Movie Details
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/movie" element={<MoviePages />} />
        <Route path="/details" element={<MovieDetailsPage />} />
        <Route path="/movie/:movietId" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPages />} />
      </Routes>
    </div>
  );
}

export default App;
