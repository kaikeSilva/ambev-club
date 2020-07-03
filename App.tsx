import React from 'react';
import {StatusBar, View} from 'react-native';
import {AppLoading} from 'expo';
import Home from './src/pages/Home';
import {Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto';
import {Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu';
import {Lato_400Regular,Lato_700Bold } from '@expo-google-fonts/lato';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
    Lato_400Regular,
    Lato_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Routes/>
    </>
  );
}

