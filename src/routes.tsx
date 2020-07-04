import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

<<<<<<< HEAD
import Home from './pages/Home';
import Bars from './pages/bars';
import Detail from './pages/Detail';
import Login1 from './pages/login-1';
import Login2 from './pages/login-2';
import ClientLogin1 from './pages/client-login-1';
import CreateAccount from './pages/create-account';
import ChoosePersona from './pages/choose-persona';
import ChoosePassword from './pages/choose-password';
import BarLogin from './pages/bar-login';
import BarCreateAccount from './pages/bar-create-account';
import BarCreatePassword from './pages/bar-create-password';
import SignIn from './pages/sign-in';
import Feed from './pages/feed/feed';
import BottomNavigation from './pages/components/bottom-navigation';
import BeerCollection from './pages/beer-collection';
=======
import Bars from './pages/ClientNavigation/Bars';
import Login1 from './pages/AuthScreens/Login1';
import Login2 from './pages/AuthScreens/Login2';
import ClientLogin1 from './pages/AuthScreens/ClientLogin';
import CreateAccount from './pages/AuthScreens/ClientCreateAccount';
import ChoosePersona from './pages/AuthScreens/ChoosePersona';
import CreatePassword from './pages/AuthScreens/CreatePassword';
import BarLogin from './pages/AuthScreens/BarLogin';
import BarCreateAccount from './pages/AuthScreens/BarCreateAccount';
import BarCreatePassword from './pages/AuthScreens/BarCreatePassword';
import SignIn from './pages/AuthScreens/SignIn';
import Feed from './pages/ClientNavigation/Events/feed';
import BottomNavigation from './components/bottom-navigation';
>>>>>>> 859d4fa40c90df15776df39c33547c7a55dc6587

const AppStack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5',
          },
        }}
      >
        <AppStack.Screen name="Login1" component={Login1} />
        <AppStack.Screen name="Login2" component={Login2} />
        <AppStack.Screen name="ClientLogin1" component={ClientLogin1} />
        <AppStack.Screen name="CreateAccount" component={CreateAccount} />
        <AppStack.Screen name="ChoosePersona" component={ChoosePersona} />
        <AppStack.Screen name="ChoosePassword" component={CreatePassword} />
        <AppStack.Screen name="BarLogin" component={BarLogin} />
        <AppStack.Screen name="BarCreateAccount" component={BarCreateAccount} />
        <AppStack.Screen 
          name="BarCreatePassword"
          component={BarCreatePassword}
        />
        <AppStack.Screen name="SignIn" component={SignIn} />
        <AppStack.Screen name="Feed" component={Feed} />
        <AppStack.Screen name="Bars" component={Bars} />
        <AppStack.Screen name="BottomNavigation" component={BottomNavigation} />
        <AppStack.Screen name="BeerCollection" component={BeerCollection} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
