import { Suspense, useState, useEffect } from "react";
import { NavLink, Outlet, useParams, useNavigate } from "react-router-dom";
import { fetchMovieId } from "../../fetchMovie";
import css from "./MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    const controller = new AbortController();

    async function fetchDataId() {
      try {
        console.log(id);
        const response = await fetchMovieId(controller, id);
        setMovie(response);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          console.error(error);
        }
      }
    }

    fetchDataId();

    return () => {
      controller.abort();
    };
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className={css.container}>
      <div className={css.card}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path || ""}`}
          alt={movie.original_title || ""}
          width="500"
          height="600"
        />
        <div className={css.description}>
          <h2>{movie.original_title || ""}</h2>
          <p>User Score: {(movie.vote_average || 0) * 10}%</p>
          <h3>Overview</h3>
          <p>{movie.overview || ""}</p>
          <h3>Genres</h3>
          <p>
            {movie.genres && movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>

      <hr />

      <div className={css.additional}>
        <h3>Additional information</h3>
        <ul className={css.list}>
          <li>
            <NavLink to={`/movies/${id}/cast`} className={css.link}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to={`/movies/${id}/reviews`} className={css.link}>
              Reviews
            </NavLink>
          </li>
        </ul>

        <hr />

        <Suspense fallback={<div>LOADING SUB PAGE...</div>}>
          <Outlet />
        </Suspense>
      </div>

      <button className={css.back} type="button" onClick={handleGoBack}>
        Go back
      </button>
    </div>
  );
}
