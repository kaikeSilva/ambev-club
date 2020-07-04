/* eslint-disable camelcase */
import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';

import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';

import { Theme } from './src/styles/Theme';
import Routes from './src/routes';
import store from './src/store';

export default function App(): JSX.Element {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold,
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#DE2B2B" />
      <NavigationContainer theme={Theme}>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
