import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import { TGlobalState } from '../types';
import TopNavigation from '../components/TopNavigation';
import Bars from '../pages/ClientNavigation/Bars';
import Login1 from '../pages/AuthScreens/Login1';
import Login2 from '../pages/AuthScreens/Login2';
import ClientLogin1 from '../pages/AuthScreens/ClientLogin';
import CreateAccount from '../pages/AuthScreens/ClientCreateAccount';
import ChoosePersona from '../pages/AuthScreens/ChoosePersona';
import CreatePassword from '../pages/AuthScreens/CreatePassword';
import BarLogin from '../pages/AuthScreens/BarLogin';
import BarCreateAccount from '../pages/AuthScreens/BarCreateAccount';
import BarCreatePassword from '../pages/AuthScreens/BarCreatePassword';
import SignIn from '../pages/AuthScreens/SignIn';
import Events from '../pages/ClientNavigation/Events';
import BottomNavigation from '../components/BottomNavigation';
import BeerCollection from '../pages/ClientNavigation/BeerCollection';
import BeerDetails from '../pages/ClientNavigation/BeerDetails';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import Profile from '../pages/ClientNavigation/profile';



function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Routes = (): JSX.Element => {
  const AppDrawerNavigator = createDrawerNavigator();
  return (
      <AppDrawerNavigator.Navigator  
         drawerContent={props => <CustomDrawerContent {...props} />}>
          <AppDrawerNavigator.Screen name="Stack" component={Stack}/>
          <AppDrawerNavigator.Screen name="Profile" component={Profile}/>
      </AppDrawerNavigator.Navigator>
  );
}



const Stack = (): JSX.Element => {
  const AppStack = createStackNavigator();
  const group: number = useSelector(
    (state: TGlobalState) => state.navigation.group,
  );

  const AppDrawerNavigator = createDrawerNavigator();
  const Drawer = () => {

    return (
        <AppDrawerNavigator.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
          <AppDrawerNavigator.Screen name="Events" component={Events} />
          <AppDrawerNavigator.Screen name="BeerCollection" component={BeerCollection} />
        </AppDrawerNavigator.Navigator>
    );
  }

  return (
    <>
    <AppStack.Navigator
      headerMode={group === 0 ? 'none' : 'screen'}
      screenOptions={{
        headerStyle: {
          backgroundColor: '#DE2B2B',
        },
        headerRight: () => <TopNavigation />,
        headerTintColor: '#ffffff',
        cardStyle: {
          backgroundColor: '#f0f0f5',
        },
      }}
    >
      <AppStack.Screen
        name="Login1"
        component={Login1}
        options={{ title: 'Cerveja Club' }}
      />
      <AppStack.Screen name="Login2" component={Login2} />
      <AppStack.Screen name="ClientLogin1" component={ClientLogin1} />
      <AppStack.Screen name="CreateAccount" component={CreateAccount} />
      <AppStack.Screen name="ChoosePersona" component={ChoosePersona} />
      <AppStack.Screen name="ChoosePassword" component={CreatePassword} />
      <AppStack.Screen name="BarLogin" component={BarLogin} />
      <AppStack.Screen name="BarCreateAccount" component={BarCreateAccount} />
      <AppStack.Screen name="BarCreatePassword" component={BarCreatePassword} />
      <AppStack.Screen name="SignIn" component={SignIn} />
      <AppStack.Screen name="Events" component={Events} />
      <AppStack.Screen name="Bars" component={Bars} />
      <AppStack.Screen name="BottomNavigation" component={BottomNavigation} />
      <AppStack.Screen name="BeerCollection" component={BeerCollection} />
      <AppStack.Screen name="BeerDetails" component={BeerDetails} />
      <AppStack.Screen name="Drawer" component={Drawer} />
    </AppStack.Navigator>
    </>
  );
};

export default Routes;
