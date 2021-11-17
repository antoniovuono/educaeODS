import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/screens/Home';
import Info from '../pages/screens/Information';
import {Favorites} from '../pages/screens/Favorites';
import ObjectiveScreen from '../pages/screens/ObjectiveScreen';

const {Screen, Navigator} = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Screen name="Home" component={Home} />
      <Screen name="Info" component={Info} />
      <Screen name="Favorites" component={Favorites} />
      <Screen name="ObjectivesScreen" component={ObjectiveScreen} />
    </Navigator>
  );
};

export default AppRoutes;
