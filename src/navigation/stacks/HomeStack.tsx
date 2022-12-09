import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RegisterRouterParamList} from 'navigation/types/router';

import HomeScreen from 'screens/home/HomeScreen';
import RegisterStep1Screen from 'screens/register/RegisterStep1Screen';
import RegisterStep2Screen from 'screens/register/RegisterStep2Screen';
import RegisterStep3Screen from 'screens/register/RegisterStep3Screen';

interface IRootNavigation {}

const AppStack = createStackNavigator<RegisterRouterParamList>();

export const HomeStack: React.FunctionComponent<IRootNavigation> = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Group
        screenOptions={{
          headerShown: false,
        }}>
        <AppStack.Screen
          name="RegisterStep1Screen"
          component={RegisterStep1Screen}
        />
        <AppStack.Screen
          name="RegisterStep2Screen"
          component={RegisterStep2Screen}
        />
        <AppStack.Screen
          name="RegisterStep3Screen"
          component={RegisterStep3Screen}
        />
        <AppStack.Screen name="Success" component={HomeScreen} />
      </AppStack.Group>
    </AppStack.Navigator>
  );
};

export default HomeStack;
