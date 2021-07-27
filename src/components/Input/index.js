import React from 'react';

import Cleave from 'cleave.js/react';
import 'cleave.js/dist/addons/cleave-phone.br';
import CurrencyInput from 'react-intl-currency-input';

import { Controller } from 'react-hook-form';
import { InputGroup, Label, Small } from './style';

export default function InputComponent({
  name,
  tipo = 'default',
  label,
  currency = false,
  textarea = false,
  rowstextarea = 5,
  control,
  errors,
  ...rest
}) {
  const currencyConfig = {
    locale: 'pt-BR',
    formats: {
      number: {
        BRL: {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      },
    },
  };

  return (
    <InputGroup className={`input-group ${tipo}`}>
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          if (currency) {
            return (
              <CurrencyInput
                currency="BRL"
                config={currencyConfig}
                {...field}
                {...rest}
              />
            );
          }

          if (textarea) {
            return <textarea rows={rowstextarea} {...field} {...rest} />;
          }

          return <Cleave {...field} {...rest} />;
        }}
      />
      <Small>{errors || ''}</Small>
    </InputGroup>
  );
}
