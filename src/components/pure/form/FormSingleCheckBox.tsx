import {Checkbox, FormControl, HStack, Text} from 'native-base';
import React from 'react';
import {Controller} from 'react-hook-form';
interface IFormSingleCheckBox {
  control: any;
  errors: any;
  textLabel: any;
  name: any;
  defaultValue?: boolean;
  required?: boolean;
}
export const FormSingleCheckBox = (props: IFormSingleCheckBox) => {
  const {control, errors, textLabel, name, defaultValue, required} = props;
  return (
    <FormControl isRequired={required || false} isInvalid={name in errors}>
      <Controller
        control={control}
        render={({field}) => (
          <HStack alignItems="center">
            <Checkbox
              onChange={() => field.onChange(!field.value)}
              isChecked={!!field.value}
              value={field.value}
              key={name}
            />
            <FormControl.Label>
              <Text ml={4} fontWeight={400} fontSize={'sm'} color={'grey.100'}>
                {textLabel}
              </Text>
            </FormControl.Label>
          </HStack>
        )}
        name={name}
        defaultValue={defaultValue}
      />
      <FormControl.ErrorMessage>
        {errors?.[name]?.message}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};
export default FormSingleCheckBox;
