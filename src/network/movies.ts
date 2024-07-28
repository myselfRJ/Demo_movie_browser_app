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
  console.log(
    'getting call api',
    moviesState.nowPlaying.length,
    moviesState.upcoming.length,
  );
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

  useEffect(() => {
    getMovies();
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
export const getMovieDetails = async (movie_id: number) => {
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

export const searchMovie = async (query: any) => {
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
export const getNowPlaying = async (pageId?: number) => {
  try {
    const detailsResponse = await fetchApi.get<MovieDetailsResponse>(
      URLS.nowplayingMoviesEndpoint + `?page=${pageId || 1}`,
    );
    return detailsResponse.data.results;
  } catch (error) {
    console.log('Error fetching movie details:', error);
    throw error;
  }
};
export const getPopular = async (pageId?: number) => {
  try {
    const detailsResponse = await fetchApi.get<MovieDetailsResponse>(
      URLS.popularMoviesEndpoint + `?page=${pageId || 1}`,
    );
    return detailsResponse.data.results;
  } catch (error) {
    console.log('Error fetching movie details:', error);
    throw error;
  }
};
export const getToprated = async (pageId?: number) => {
  try {
    console.log(URLS.nowplayingMoviesEndpoint + `?page=${pageId || 1}`);
    const detailsResponse = await fetchApi.get<MovieDetailsResponse>(
      URLS.topRatedMoviesEndpoint + `?page=${pageId || 1}`,
    );
    return detailsResponse.data.results;
  } catch (error) {
    console.log('Error fetching movie details:', error);
    throw error;
  }
};
export const getUpcoming = async (pageId?: number) => {
  try {
    console.log(URLS.nowplayingMoviesEndpoint + `?page=${pageId || 1}`);
    const detailsResponse = await fetchApi.get<MovieDetailsResponse>(
      URLS.upcomingMoviesEndpoint + `?page=${pageId || 1}`,
    );
    return detailsResponse.data.results;
  } catch (error) {
    console.log('Error fetching movie details:', error);
    throw error;
  }
};
