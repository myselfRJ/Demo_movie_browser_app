import {useEffect, useState} from 'react';
import {fetchApi} from './fetch';
import {
  IMoviesState,
  MovieDBResponse,
  MovieDetailsResponse,
} from './movieInterface';
import {URLS} from './urls';

export const useMovieDB = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [moviesState, setMoviesState] = useState<IMoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    try {
      const nowPlayingPromise = fetchApi.get<MovieDBResponse>(
        URLS.nowplayingMoviesEndpoint,
      );
      const upcomingPromise = fetchApi.get<MovieDBResponse>(
        URLS.upcomingMoviesEndpoint,
      );
      const popularPromise = fetchApi.get<MovieDBResponse>(
        URLS.popularMoviesEndpoint,
      );
      const topRatedPromise = fetchApi.get<MovieDBResponse>(
        URLS.topRatedMoviesEndpoint,
      );

      const [nowPlayingData, popularData, topRatedData, upcomingData] =
        await Promise.all([
          nowPlayingPromise,
          popularPromise,
          topRatedPromise,
          upcomingPromise,
        ]);

      setMoviesState({
        nowPlaying: nowPlayingData.data.results,
        popular: popularData.data.results,
        topRated: topRatedData.data.results,
        upcoming: upcomingData.data.results,
      });
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching movie:', error);
    }
  };
  const getMovieDetails = async (movie_id: number) => {
    try {
      const detailsResponse = await fetchApi.get<MovieDetailsResponse>(
        URLS.getMovieDetailsById(movie_id),
      );

      return detailsResponse.data;
    } catch (error) {
      console.log('Error fetching movie details:', error);
      throw error;
    }
  };

  const searchMovie = async (query: any) => {
    try {
      const response = await fetchApi.get<MovieDBResponse>(
        URLS.searchMoviesEndpoint,
        {
          params: {
            query: query,
          },
        },
      );
      return response;
    } catch (error) {
      console.log('Error fetching movie:', error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
    getMovieDetails,
    searchMovie,
  };
};
