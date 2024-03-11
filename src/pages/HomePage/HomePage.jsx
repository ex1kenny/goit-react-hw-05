import { useEffect, useState } from "react";
import css from "./HomePage.module.css";
import { fetchTrendMovies } from "../../fetchMovie";
import MovieList from "../../components /MovieList/MovieList";

export default function HomePage() {
  const [movieTrends, setMovieTrends] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const response = await fetchTrendMovies(controller);
        setMovieTrends(response.results);
      } catch (error) {}
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className={css.container}>
      <h1>Trending today</h1>
      <MovieList movies={movieTrends} />
    </div>
  );
}
