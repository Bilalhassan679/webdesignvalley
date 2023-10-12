import React, { useEffect, useState } from 'react';
import {
  LogBox,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigatior from './src/navigations/naviagation';
import FastImage from 'react-native-fast-image';

function AppTwo() {
  const [isVisible, setIsVisible] = useState(true);
  const SplashScreen = () => {
    return (
      <View style={{flex:1,backgroundColor:'#171717',
      justifyContent:'center',
      alignItems:'center',
    }}>

      <FastImage
        style={styles.SplashScreen_RootView}
        source={require('./src/assets/images/rm-appIcon.png')}
        resizeMode={FastImage.resizeMode.contain}
        
        />
        </View>
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
    }, 0);
  }, []);
  return (
    <>
         <StatusBar backgroundColor={'#ff1791'} barStyle={'light-content'} />

      {isVisible && Platform.OS === 'android' ? 
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
    aspectRatio:1,
     height: '25%',
   },
});