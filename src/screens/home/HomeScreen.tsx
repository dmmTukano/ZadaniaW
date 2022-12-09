import React from 'react';
import {useCallback} from 'react';
import useHomeNavigation from 'navigation/hooks/useHomeNavigation';
import {Button} from 'native-base';

export const HomeScreen: React.FunctionComponent = () => {
  const navigation = useHomeNavigation();

  const navigationToAuth = useCallback(
    () => navigation.navigate('RegisterStep1Screen'),
    [navigation],
  );

  return <Button onPress={navigationToAuth}>Auth</Button>;
};

export default HomeScreen;
