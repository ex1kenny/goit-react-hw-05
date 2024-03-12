import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../fetchMovie";

export default function MovieCast() {
  const [casts, setCasts] = useState([]);
  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    const controller = new AbortController();
    async function fetchDataCast() {
      try {
        const response = await fetchMovieCast(controller, id);
        setCasts(response.cast);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          console.error(error);
        }
      }
    }
    fetchDataCast();
    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <div>
      {casts.length === 0 && <p>There are no casts yet.</p>}
      <ul className={css.list}>
        {casts.map((item) => (
          <li key={item.id}>
            {item.profile_path !== null && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt={item.name}
                width="200"
                height="300"
              />
            )}
            <p>{item.name}</p>
            <p>Character: {item.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
