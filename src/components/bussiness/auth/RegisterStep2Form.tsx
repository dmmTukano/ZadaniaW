import {Button, Stack, Text} from 'native-base';
import React from 'react';
import FormInputFloat from '../../pure/form/FormInputFloat';
import useRegisterStep2Form from './hooks/useRegisterStep2Form';

export default function RegisterStep2Form() {
  const {control, errors, onSubmit, handleSubmit} = useRegisterStep2Form();
  return (
    <>
      <Stack alignItems={'center'} space={4} mt={3} mb={3}>
        <FormInputFloat
          control={control}
          errors={errors}
          name={'password'}
          width={250}
          placeholder={'Hasło'}
          required={true}
          type={'password'}
        />
        <FormInputFloat
          control={control}
          errors={errors}
          width={250}
          name={'confirmPassword'}
          placeholder={'Potwierdź hasło'}
          type={'password'}
        />
      </Stack>
      <Button onPress={handleSubmit(onSubmit)}>
        <Text textTransform={'uppercase'} color={'white'}>
          dalej
        </Text>
      </Button>
    </>
  );
}
