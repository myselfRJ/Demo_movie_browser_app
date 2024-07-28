import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  container1: {flex: 1, backgroundColor: 'lightblue'},
  subcontainer: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    opacity: 0.7,
    marginTop: 50,
  },
  header: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subheader: {color: 'black', fontSize: 12, fontWeight: 'regular'},
  genre: {flexDirection: 'row', justifyContent: 'space-around', gap: 10},
  genreText: {color: 'black', fontSize: 16, fontWeight: 'medium'},
  para: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'regular',
    marginTop: 5,
    paddingHorizontal: 10,
  },
  poster: {
    width: 120,
    height: 140,
    position: 'absolute',
    bottom: -50,
    borderRadius: 4,
  },
});
