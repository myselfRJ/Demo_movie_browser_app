import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {styles} from './styles';

const Loader: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={100} />
    </View>
  );
};

export default Loader;
