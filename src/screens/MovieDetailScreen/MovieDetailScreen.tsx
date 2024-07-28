import {View, Text, Dimensions, Platform, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {getMovieDetails, URLS} from '../../network';
import {ScrollView} from 'react-native-gesture-handler';
import {Loader} from '../../components';
import {MovieDetailsResponse} from '../../network/movieInterface';
import {styles} from './styles';

let {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
const topMargin = ios ? '' : ' mt-4';

export default function MovieScreen() {
  const route = useRoute();
  //   const item = {id: 3};
  const [loading, setLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState<MovieDetailsResponse>();
  const navigation = useNavigation();
  useEffect(() => {
    // call the movie details api
    console.log(route.params);
    const item = route.params.item;
    item && getMovieDetail(item.id);
  }, []);

  const getMovieDetail = async id => {
    const data = await getMovieDetails(id);
    if (data) setMovie(data);
    setLoading(false);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={styles.container1}>
      <View style={{width: '100%'}}>
        {loading ? (
          <Loader />
        ) : (
          <View>
            <Image
              source={{
                uri:
                  URLS.generateImageURI(movie?.backdrop_path) ||
                  URLS.fallbackMoviePoster,
              }}
              style={{width, height: height * 0.55}}
            />
            <Image
              source={{
                uri:
                  URLS.generateImageURI(movie?.poster_path) ||
                  URLS.fallbackMoviePoster,
              }}
              style={[styles.poster, {left: 0.5 * width - 60}]}
            />
          </View>
        )}
      </View>
      <View style={[styles.subcontainer]}>
        <Text style={styles.header}>{movie?.title}</Text>
        {movie?.id ? (
          <Text style={styles.subheader}>
            {movie?.status} • {movie?.release_date?.split('-')[0] || 'N/A'} •{' '}
            {movie?.runtime} mins
          </Text>
        ) : null}
        <View style={styles.genre}>
          {movie?.genres?.map((genre, index) => {
            let showDot = index + 1 != movie.genres.length;
            return (
              <Text key={index} style={styles.genreText}>
                {genre?.name} {showDot ? '•' : null}
              </Text>
            );
          })}
        </View>
        <Text style={styles.para}>{movie?.overview}</Text>
      </View>
    </ScrollView>
  );
}
