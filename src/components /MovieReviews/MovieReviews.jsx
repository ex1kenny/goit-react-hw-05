import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReview } from "../../fetchMovie";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    const controller = new AbortController();
    async function fetchDataReview() {
      try {
        const response = await fetchMovieReview(controller, id);
        setReviews(response.results);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          console.log(error);
        }
      }
    }

    fetchDataReview();
    return () => {
      controller.abort();
    };
  }, [id]);

  return (
    <div>
      {reviews.length === 0 && <p>There are no reviews yet.</p>}
      {reviews.length > 0 && (
        <ul className={css.list}>
          {reviews.map((item) => (
            <li key={item.id}>
              <p>Author: {item.author}</p>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
