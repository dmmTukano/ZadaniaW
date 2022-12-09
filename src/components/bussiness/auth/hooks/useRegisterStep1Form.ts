import * as yup from 'yup';
import {useCallback} from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch} from 'react-redux';
import {IRegisterStep1Form} from 'types/form';
import {firstStepSuccess} from 'redux/reducer/register';
import useHomeNavigation from 'navigation/hooks/useHomeNavigation';

export default function useRegisterStep1Form() {
  const dispatch = useDispatch();
  const navigation = useHomeNavigation();

  const navigationToStep2 = useCallback(
    () => navigation.navigate('RegisterStep2Screen'),
    [navigation],
  );

  const schema = yup.object({
    firstName: yup.string().required('Pole jest wymagane.'),
    lastName: yup.string().required('Pole jest wymagane.'),
    email: yup
      .string()
      .email('Niepoprawny adres email')
      .required('Pole jest wymagane.'),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IRegisterStep1Form>({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    (data: IRegisterStep1Form) => {
      const {email, firstName, lastName} = data;
      dispatch(firstStepSuccess({firstName, lastName, email}));
      navigationToStep2();
    },
    [dispatch, navigationToStep2],
  );

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
  };
}
