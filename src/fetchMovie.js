import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const fetchMovieQuery = async (controller, query) => {
  const options = {
    signal: controller.signal,
    params: {
      query,
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjRlNzQzYmRmZWVmMGY5ZmM1NGFjOTlhY2UzYjBlYyIsInN1YiI6IjY1ZWRkMjY4Mjc5MGJmMDE3YzQ1NjJmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LwXz036CSiNWiPEjOCHqGWDxNq9vRDR1JM-RbTE2bA0",
    },
  };
  const response = await axios.get("search/movie", options);
  return response.data;
};

export const fetchTrendMovies = async (controller) => {
  const options = {
    signal: controller.signal,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjRlNzQzYmRmZWVmMGY5ZmM1NGFjOTlhY2UzYjBlYyIsInN1YiI6IjY1ZWRkMjY4Mjc5MGJmMDE3YzQ1NjJmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LwXz036CSiNWiPEjOCHqGWDxNq9vRDR1JM-RbTE2bA0",
    },
  };
  const response = await axios.get("trending/movie/day", options);
  return response.data;
};

export const fetchMovieId = async (controller, id) => {
  const options = {
    signal: controller.signal,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjRlNzQzYmRmZWVmMGY5ZmM1NGFjOTlhY2UzYjBlYyIsInN1YiI6IjY1ZWRkMjY4Mjc5MGJmMDE3YzQ1NjJmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LwXz036CSiNWiPEjOCHqGWDxNq9vRDR1JM-RbTE2bA0",
    },
  };
  const response = await axios.get(`movie/${id}`, options);
  return response.data;
};

export const fetchMovieCast = async (controller, id) => {
  const options = {
    signal: controller.signal,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjRlNzQzYmRmZWVmMGY5ZmM1NGFjOTlhY2UzYjBlYyIsInN1YiI6IjY1ZWRkMjY4Mjc5MGJmMDE3YzQ1NjJmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LwXz036CSiNWiPEjOCHqGWDxNq9vRDR1JM-RbTE2bA0",
    },
  };
  const response = await axios.get(`movie/${id}/credits`, options);
  return response.data;
};

export const fetchMovieReview = async (controller, id) => {
  const options = {
    signal: controller.signal,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNjRlNzQzYmRmZWVmMGY5ZmM1NGFjOTlhY2UzYjBlYyIsInN1YiI6IjY1ZWRkMjY4Mjc5MGJmMDE3YzQ1NjJmMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LwXz036CSiNWiPEjOCHqGWDxNq9vRDR1JM-RbTE2bA0",
    },
  };
  const response = await axios.get(`movie/${id}/reviews`, options);
  return response.data;
};
