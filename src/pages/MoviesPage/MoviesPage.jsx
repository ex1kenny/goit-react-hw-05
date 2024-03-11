import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import css from "./MoviesPage.module.css";
import { fetchMovieQuery } from "../../fetchMovie";
import { toast } from "react-hot-toast";
import MovieList from "../../components /MovieList/MovieList";

export default function MoviesPage() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (query === "") {
      return;
    }

    const controller = new AbortController();

    async function fetchDataQuery() {
      try {
        const response = await fetchMovieQuery(controller, query);
        if (response.results.length === 0) {
          toast.error("No movies found");
        } else {
          setMovies(response.results);
        }
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          console.error("Error fetching data:", error);
          toast.error("An error occurred while fetching data");
        }
      }
    }

    fetchDataQuery();

    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <div className={css.container}>
      <Formik
        className={css.form}
        initialValues={{ query: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setQuery(values.query);
          setSubmitting(false);
        }}
      >
        <Form>
          <Field type="text" name="query" className={css.label} />
          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
      <div className={css.list}>
        <MovieList movies={movies} state={{ from: location }} />
      </div>
    </div>
  );
}
