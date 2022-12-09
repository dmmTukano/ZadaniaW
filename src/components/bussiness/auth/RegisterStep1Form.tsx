import {Button, Stack, Text} from 'native-base';
import React from 'react';
// import {useSelector} from 'react-redux';
import FormInputFloat from '../../pure/form/FormInputFloat';
import useRegisterStep1Form from './hooks/useRegisterStep1Form';

export default function RegisterStep1Form() {
  const {control, errors, onSubmit, handleSubmit} = useRegisterStep1Form();
  // const register = useSelector((state: any) => state.register);

  return (
    <>
      <Stack alignItems={'center'} space={4} mt={3} mb={3}>
        <FormInputFloat
          control={control}
          errors={errors}
          name={'firstName'}
          width={250}
          placeholder={'Imię'}
          size={'lg'}
        />
        <FormInputFloat
          control={control}
          errors={errors}
          width={250}
          name={'lastName'}
          placeholder={'Nazwisko'}
          size={'lg'}
        />
        <FormInputFloat
          control={control}
          errors={errors}
          width={250}
          name={'email'}
          placeholder={'Email'}
          keyboardType={'email-address'}
          size={'lg'}
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
