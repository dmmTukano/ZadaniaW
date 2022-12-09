import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {IRegisterStep2Form} from 'types/form';
import {useCallback} from 'react';
import useHomeNavigation from 'navigation/hooks/useHomeNavigation';
import {useDispatch} from 'react-redux';
import {secondStepSuccess} from 'redux/reducer/register';

export default function useRegisterStep1Form() {
  const navigation = useHomeNavigation();
  const dispatch = useDispatch();

  const navigationToStep3 = useCallback(
    () => navigation.navigate('RegisterStep3Screen'),
    [navigation],
  );

  const schema = yup.object({
    password: yup
      .string()
      .min(8, 'Hasło musi zawierać min. 8 znaków.')
      .required('Pole jest wymagane.'),
    confirmPassword: yup
      .string()
      .required('Pole jest wymagane.')
      .oneOf([yup.ref('password')], 'Hasło musi się zgadzać'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IRegisterStep2Form>({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(() => {
    dispatch(secondStepSuccess());
    navigationToStep3();
  }, [dispatch, navigationToStep3]);

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
  };
}
