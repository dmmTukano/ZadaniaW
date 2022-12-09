import React from 'react';
import {Input, IInputProps} from 'native-base';
import {KeyboardTypeOptions} from 'react-native';

interface IInputFloat {
  defaultValue?: string;
  size?: string;
  width?: number;
  height?: number;
  type?: 'text' | 'password';
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  onChange?: () => void;
  onBlur?: () => void;
  ref?: any;
}

export default function InpuFloat(props: IInputFloat & IInputProps) {
  const {
    size,
    type,
    placeholder,
    keyboardType,
    onBlur,
    onChange,
    width,
    height,
    ref,
  } = props;
  return (
    <Input
      {...props}
      size={size}
      w={width}
      h={height}
      type={type}
      ref={ref}
      placeholder={placeholder}
      onBlur={onBlur}
      onChangeText={onChange}
      keyboardType={keyboardType}
    />
  );
}
