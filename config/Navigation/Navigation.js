import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GetStarted from '../../src/Container/getStarted/getStarted';
import Country from '../../src/Container/country/country';
import Home from './../../src/Container/Home/Home';
import Maps from './../../src/Container/Map/Map';
import Drawer from './../Drawer/Drawer'
const Stack = createStackNavigator();


function Navigation() {
  return (
      <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown: false}}/>
    <Stack.Screen name="Home" component={Drawer} options={{headerShown: false}}/>
      <Stack.Screen name="Maps" component={Maps}  options={{headerShown: false}}/>
      <Stack.Screen name="country" component={Country}  options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Navigation;