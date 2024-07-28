import React, {useEffect, useState, useCallback} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Loader, MovieCard} from '../../components';
import {getNowPlaying, getPopular, getToprated} from '../../network';
import {Movie} from '../../network/movieInterface';

interface HomeScreenProps {
  screenType?: string;
}

const HomeScreen: React.FC<HomeScreenProps> = ({screenType}) => {
  const route = useRoute();
  const params = route.params as {screenType: string};
  const [loading, setLoading] = useState<boolean>(true);
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [pageCount, setPageCount] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const nav = useNavigation();

  const fetchData = async (count: number) => {
    setLoading(true);
    try {
      let data;
      if (screenType === 'nowPlaying') {
        data = await getNowPlaying(count);
      } else if (screenType === 'popular') {
        data = await getPopular(count);
      } else if (screenType === 'topRated') {
        data = await getToprated(count);
      } else {
        data = await getNowPlaying(count);
      }

      if (data.length === 0) {
        setHasMore(false);
      } else {
        setMovieData(prev => [...prev, ...data]);
        setPageCount(prev => prev + 1);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(pageCount);
  }, [screenType]);

  const handleLoadMore = useCallback(() => {
    if (!loading && hasMore) {
      fetchData(pageCount);
    }
  }, [loading, hasMore, pageCount]);

  if (loading && pageCount === 1) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movieData}
        renderItem={({item}) => <MovieCard movie={item} />}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{height: 10}} />}
        numColumns={2}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading && <Loader />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
