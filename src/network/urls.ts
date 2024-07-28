export const URLS = {
  generateImageURI: (uriImage: string | undefined) =>
    uriImage ? 'https://image.tmdb.org/t/p/w500' + uriImage : null,
  generateImageProfile: (profilePath: string | null) =>
    profilePath ? 'https://image.tmdb.org/t/p/w185' + profilePath : null,
  fallbackMoviePoster:
    'https://img.myloview.com/stickers/white-laptop-screen-with-hd-video-technology-icon-isolated-on-grey-background-abstract-circle-random-dots-vector-illustration-400-176057922.jpg',
  fallbackProfileImage:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmUiF-YGjavA63_Au8jQj7zxnFxS_Ay9xc6pxleMqCxH92SzeNSjBTwZ0l61E4B3KTS7o&usqp=CAU',
  nowplayingMoviesEndpoint: '/movie/now_playing',
  upcomingMoviesEndpoint: '/movie/upcoming',
  popularMoviesEndpoint: '/movie/popular',
  topRatedMoviesEndpoint: '/movie/top_rated',
  searchMoviesEndpoint: '/search/movie',
  getMovieDetailsById: (movie_id: number) => `/movie/${movie_id}`,
};
