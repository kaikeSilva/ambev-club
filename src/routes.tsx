import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Points from './pages/Points';
import Detail from './pages/Detail';
import Login1 from './pages/login-1';
import Login2 from './pages/login-2';
import ClientLogin1 from './pages/client-login-1';
import CreateAccount from './pages/create-account';
import ChoosePersona from './pages/choose-persona';
import ChoosePassword from './pages/choose-password';

const AppStack = createStackNavigator();
const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator 
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: '#f0f0f5'
                }
            }}
            >
                <AppStack.Screen name="Login1" component={Login1}/>
                <AppStack.Screen name="Login2" component={Login2}/>
                <AppStack.Screen name="ClientLogin1" component={ClientLogin1}/>
                <AppStack.Screen name="CreateAccount" component={CreateAccount}/>
                <AppStack.Screen name="ChoosePersona" component={ChoosePersona}/>    
                <AppStack.Screen name="ChoosePassword" component={ChoosePassword}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes