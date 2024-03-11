import { NavLink } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <p className={css.text}>Ooooops, not found page!</p>
      <NavLink to="/" className={css.link}>
        Go to the home page...
      </NavLink>
    </div>
  );
}
