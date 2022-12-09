import React from 'react';
import {useCallback} from 'react';
import useHomeNavigation from 'navigation/hooks/useHomeNavigation';
import {Button} from 'native-base';

export const HomeScreen: React.FunctionComponent = () => {
  const navigation = useHomeNavigation();

  const navigationBack = useCallback(() => navigation.goBack(), [navigation]);

  return <Button onPress={navigationBack}>ZAKOŃCZ REJESTRACJĘ</Button>;
};

export default HomeScreen;
