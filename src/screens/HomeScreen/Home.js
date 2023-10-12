import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style'
import { WebView } from 'react-native-webview';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';


const Home = () => {
  const [webViewIsLoaded, setWebViewIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);


  const SplashScreen = () => {
    return (
      <FastImage
        style={styles.SplashScreen_RootView}
        source={require('../../assets/gif/splash.gif')}
        resizeMode={FastImage.resizeMode.contain}

      />
    );
  };


  return (
    <>
      <StatusBar backgroundColor={'#ff1791'} barStyle={'light-content'} />
      <View style={{ flex: isVisible ? 0 : 1 }}>
        <SafeAreaView style={{ backgroundColor: '#ff1791' }} />
        <WebView
          onLoadEnd={(e) => {
            setIsVisible(false)
          }}
          source={{ uri: 'https://websitedesignvalley.com/' }}
          mediaPlaybackRequiresUserAction={true} // Set to true to block video auto-play
        />
      </View>
      {isVisible && SplashScreen()}
    </>

  )

}


export default Home

