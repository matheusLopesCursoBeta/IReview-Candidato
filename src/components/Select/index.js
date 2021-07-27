import React from 'react';

import Select from 'react-select';

import { Controller } from 'react-hook-form';
import { InputGroup, Label, Small } from './style';

export default function InputComponent({
  name,
  tipo = 'default',
  label,
  control,
  errors,
  ...rest
}) {
  return (
    <InputGroup className={`input-group ${tipo}`}>
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <Select {...field} {...rest} />}
      />
      <Small>{errors || ''}</Small>
    </InputGroup>
  );
}
