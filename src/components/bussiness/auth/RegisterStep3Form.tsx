import FormSingleCheckBox from 'components/pure/form/FormSingleCheckBox';
import {Button, Stack, Text} from 'native-base';
import React from 'react';
import useRegisterStep2Form from './hooks/useRegisterStep3Form';

export default function RegisterStep2Form() {
  const {control, errors, onSubmit, handleSubmit} = useRegisterStep2Form();
  return (
    <>
      <Stack alignItems={'center'} space={4} mt={3} mb={3}>
        <FormSingleCheckBox
          control={control}
          errors={errors}
          textLabel={'Akceptuję regulamin wydarzenia'}
          name={'rodo'}
        />
        <FormSingleCheckBox
          control={control}
          errors={errors}
          textLabel={'Akceptuję politykę prywatności'}
          name={'rules'}
        />
      </Stack>
      <Button onPress={handleSubmit(onSubmit)}>
        <Text textTransform={'uppercase'} color={'white'}>
          zarejestruj się
        </Text>
      </Button>
    </>
  );
}
