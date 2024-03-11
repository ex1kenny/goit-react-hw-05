import { NavLink, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.ul}>
      {movies.map((item) => (
        <li key={item.id}>
          <NavLink to={`/movies/${item.id}`} state={location}>
            {item.original_title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
