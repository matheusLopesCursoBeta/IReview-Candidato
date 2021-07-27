import React from 'react';

import Switch from 'react-input-switch';

import { Controller } from 'react-hook-form';
import { InputGroup, Label, Small } from './style';

export default function InputSwitch({ name, label, control, errors, ...rest }) {
  return (
    <InputGroup className="onoffswitch">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            {label}
            <Switch on="yes" off="no" {...field} {...rest} />
          </>
        )}
      />
      <Small>{errors || ''}</Small>
    </InputGroup>
  );
}
