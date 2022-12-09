import React from 'react';
import {FormControl} from 'native-base';
import {Controller} from 'react-hook-form';
import InpuFloat from 'components/pure/input/InputFloat';
import {KeyboardTypeOptions} from 'react-native';

interface IFormInputFloat {
  control: any;
  errors: any;
  name: string;
  required?: boolean;
  height?: number;
  width?: number;
  size?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  type?: 'text' | 'password';
}

export default function FormInputFloat(props: IFormInputFloat) {
  const {
    name,
    control,
    errors,
    keyboardType,
    size,
    width,
    height,
    placeholder,
    required,
    type,
  } = props;
  return (
    <FormControl isInvalid={name in errors} isRequired={required || false}>
      <Controller
        control={control}
        name={name}
        render={({field: {onChange, onBlur, value}}) => {
          return (
            <InpuFloat
              size={size}
              width={width}
              height={height}
              isRequired
              defaultValue={value?.toString()}
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
              keyboardType={keyboardType}
              type={type}
            />
          );
        }}
      />
      <FormControl.ErrorMessage color={'red.100'}>
        {errors?.[name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
