import * as React from 'react';
import {Card, Text} from 'react-native-paper';
import {Movie} from '../../network/movieInterface';
import {URLS} from '../../network';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationProp, useNavigation} from '@react-navigation/native';

interface MovieCardProps {
  movie: Movie;
}
const MovieCard: React.FC<MovieCardProps> = React.memo(({movie}) => {
  const nav: NavigationProp<ReactNavigation.RootParamList> = useNavigation();
  const date = new Date(movie.release_date);
  return (
    <Card
      style={{flex: 1, margin: 5, borderWidth: 4, borderColor: 'lightblue'}}>
      <TouchableOpacity
        onPress={() => {
          console.log(movie.title);
          nav.navigate('MovieDetailScreen', {item: movie});
          //
        }}>
        <Card.Cover source={{uri: URLS.generateImageURI(movie.poster_path)}} />
        <Card.Content>
          <Text variant="titleLarge">{movie.title}</Text>
          <Text variant="bodyMedium">
            {date?.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
        </Card.Content>
      </TouchableOpacity>
    </Card>
  );
});

export default MovieCard;
