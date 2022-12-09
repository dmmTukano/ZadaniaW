import React from 'react';
import {Box, Text, View} from 'native-base';
import RegisterStep3Form from 'components/bussiness/auth/RegisterStep3Form';

import DefaultRegisterLayout from 'layouts/DefaultRegisterLayout';

export const RegisterScreen: React.FunctionComponent = () => {
  return (
    <DefaultRegisterLayout
      title={'tytuł wydarzenia'}
      subtitle={'opis wydarzenia'}>
      <View>
        <Box flexDir={'row'} justifyContent={'center'}>
          <Text fontSize={'xl'} color={'black'}>
            Krok 1
          </Text>
          <Text fontSize={'xl'} color={'black'}>
            {' '}
            Krok 2
          </Text>
          <Text fontSize={'xl'} color={'amber.800'}>
            {' '}
            Krok 3
          </Text>
        </Box>
        <RegisterStep3Form />
      </View>
    </DefaultRegisterLayout>
  );
};

export default RegisterScreen;
