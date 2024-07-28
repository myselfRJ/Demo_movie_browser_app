/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {GestureHandlerRootView, ScrollView} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import BottomNavigator from './src/navigators/BottomNavigation';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigators/RootNavigation';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView
        style={{backgroundColor: backgroundStyle.backgroundColor, flex: 1}}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />

        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
