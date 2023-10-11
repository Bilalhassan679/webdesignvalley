import React, { useEffect, useState } from 'react';
import {
  LogBox,
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigatior from './src/navigations/naviagation';
import FastImage from 'react-native-fast-image';

function AppTwo() {
  const [isVisible, setIsVisible] = useState(true);
  const SplashScreen = () => {
    return (
      <FastImage
        style={styles.SplashScreen_RootView}
        source={require('./src/assets/gif/splash.gif')}
        resizeMode={FastImage.resizeMode.contain}
        
      />
    );
  };

  useEffect(async () => {
    (async () => {
      LogBox.ignoreLogs([
        'VirtualizedLists should never be nested',
        'ViewPropTypes will be removed from React Native',
      ]);
      LogBox.ignoreAllLogs(true);
    })();
    setTimeout(function () {
      setIsVisible(false);
    }, 4000);
  }, []);
  return (
    <>
      {isVisible ? 
      SplashScreen()
      
      :

        <NavigationContainer >
          <StackNavigatior />
        </NavigationContainer>}
    </>
  );
}

export default AppTwo;

const styles = StyleSheet.create({
  SplashScreen_RootView: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor:'#171717'
  },
});