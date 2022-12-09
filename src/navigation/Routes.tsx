import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './stacks/HomeStack';

interface IRoots {}

export const Routes: React.FunctionComponent<IRoots> = () => {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

export default Routes;
