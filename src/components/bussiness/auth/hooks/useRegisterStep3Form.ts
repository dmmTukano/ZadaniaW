import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {IRegisterStep3Form} from 'types/form';
import {useCallback} from 'react';
import useHomeNavigation from 'navigation/hooks/useHomeNavigation';

export default function useRegisterStep1Form() {
  const navigation = useHomeNavigation();
  const navigationToStep3 = useCallback(
    () => navigation.navigate('RegisterStep3Screen'),
    [navigation],
  );
  const schema = yup.object({
    plan: yup.string().required('Pole jest wymagane.'),
    rodo: yup.boolean().required('Pole jest wymagane.'),
    rules: yup.boolean().required('Pole jest wymagane.'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IRegisterStep3Form>({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    (data: IRegisterStep3Form) => {
      navigationToStep3();
    },
    [navigationToStep3],
  );

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
  };
}
