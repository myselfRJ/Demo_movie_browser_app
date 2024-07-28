import axios from 'axios';

const ACCESS_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzY2E3M2RiYjFkZjg5NDY1NDkwODVkNjhkMDdiOGI1MyIsIm5iZiI6MTcyMjA3NTc1Ni42MDk5MjQsInN1YiI6IjY2YTRjOTU4NWM0YTgzZTFmNzllYmZkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Oavluu0NSVrmeXJUSSP1sUVheIOgri8aojaeZ7t_cK4';

export const fetchApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
});
