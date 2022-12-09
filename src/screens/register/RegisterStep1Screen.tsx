import React from 'react';
import RegisterStep1Form from 'components/bussiness/auth/RegisterStep1Form';
import {Box, Text, View} from 'native-base';
import DefaultRegisterLayout from 'layouts/DefaultRegisterLayout';

export const RegisterScreen: React.FunctionComponent = () => {
  return (
    <DefaultRegisterLayout
      title={'tytuł wydarzenia'}
      subtitle={'opis wydarzenia'}>
      <View>
        <Box flexDir={'row'} justifyContent={'center'}>
          <Text fontSize={'xl'} color={'amber.800'}>
            Krok 1
          </Text>
          <Text fontSize={'xl'} color={'black'}>
            {' '}
            Krok 2
          </Text>
          <Text fontSize={'xl'} color={'black'}>
            {' '}
            Krok 3
          </Text>
        </Box>
        <RegisterStep1Form />
      </View>
    </DefaultRegisterLayout>
  );
};

export default RegisterScreen;
