import {Box, Icon, Stack, Text, View} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';

interface IDefaultRegisterLayoutProps {
  title: string;
  subtitle?: string;
  isSuccessfull?: boolean;
  children: React.ReactNode;
}

export default function DefaultRegisterLayout(
  props: IDefaultRegisterLayoutProps,
) {
  const {title, isSuccessfull, subtitle, children} = props;

  return (
    <SafeAreaView>
      <Box justifyContent={'center'} mt={20}>
        {isSuccessfull ? (
          <Icon />
        ) : (
          <>
            <Stack
              justifyContent={'center'}
              alignItems={'center'}
              mt={4}
              mb={120}>
              <Text fontSize={'lg'} textTransform={'uppercase'}>
                {title}
              </Text>
              <Text fontSize={'lg'} textTransform={'uppercase'}>
                {subtitle}
              </Text>
            </Stack>
          </>
        )}
        <View
          justifyContent={'center'}
          alignItems={'center'}
          alignContent={'center'}>
          {!isSuccessfull && (
            <Text fontSize={'lg'} mb={4}>
              Formularz rejestracyjny
            </Text>
          )}
          {children}
        </View>
      </Box>
    </SafeAreaView>
  );
}
