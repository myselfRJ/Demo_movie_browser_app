import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import React from 'react';
import {Icon} from 'react-native-paper';
import {HomeScreen} from '../screens';

type BottomTabList = {
  NowPlayingScreen: undefined;
  PopularScreen: undefined;
  TopRatedScreen: undefined;
  UpcomingScreen: undefined;
};

const Tab = createMaterialBottomTabNavigator<BottomTabList>();

const BottomNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="NowPlayingScreen"
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white',
          height: 70,
          paddingBottom: 10,
        },
      }}>
      <Tab.Screen
        name="NowPlayingScreen"
        children={() => <HomeScreen screenType="Nowplaying" />}
        options={{
          tabBarLabel: 'Now Playing',
          tabBarIcon: () => {
            return <Icon source={'play-box'} size={20} />; //play-box-outline
          },
        }}
      />
      <Tab.Screen
        name="PopularScreen"
        children={() => <HomeScreen screenType="Popular" />}
        options={{
          tabBarLabel: 'Popular',
          tabBarIcon: () => {
            return <Icon source={'trending-up'} size={20} />;
          },
        }}
      />
      <Tab.Screen
        name="TopRatedScreen"
        children={() => <HomeScreen screenType="Toprated" />}
        options={{
          tabBarLabel: 'Top-Rated',
          tabBarIcon: () => {
            return <Icon source={'trophy'} size={20} />;
          },
        }}
      />
      <Tab.Screen
        name="UpcomingScreen"
        children={() => <HomeScreen screenType="Upcoming" />}
        options={{
          tabBarLabel: 'Upcoming',
          tabBarIcon: () => {
            return <Icon source={'calendar-end'} size={20} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
