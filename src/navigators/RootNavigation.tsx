import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import MovieScreen from '../screens/MovieDetailScreen/MovieDetailScreen';
import BottomNavigation from './BottomNavigation';

type StackParamList = {
  MovieDetailScreen: undefined;
  Home: undefined;
};

type RootNavigationProps = {};

const Stack = createStackNavigator<StackParamList>();

const RootNavigation: React.FC<RootNavigationProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={BottomNavigation} />
      <Stack.Screen name="MovieDetailScreen" component={MovieScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
