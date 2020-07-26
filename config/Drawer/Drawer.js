import * as React from 'react';
// import { Icon } from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import GetStarted from '../../src/Container/getStarted/getStarted';
import Home from './../../src/Container/Home/Home';
import Country from './../../src/Container/country/country';
import Maps from './../../src/Container/Map/Map';
import Header from './../../src/Component/Header/Header';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Drawer.Navigator initialRouteName="Home">
        {/* <Icon name="Map" type='Fontisto'/> */}
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name="Country" component={Country} />
        <Drawer.Screen name='Maps' component={Maps} />
      </Drawer.Navigator>
  );
}
