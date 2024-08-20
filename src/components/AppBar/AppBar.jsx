import clsx from "clsx";
import css from "./AppBar.module.css";
import { NavLink } from "react-router-dom";
const AppBar = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movie" className={buildLinkClass}>
          Movie
        </NavLink>
      </nav>
    </header>
  );
};
export default AppBar;
