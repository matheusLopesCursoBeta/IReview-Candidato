import React from 'react';

export const limpaString = data => {
  return data.toString().replace(/\D/g, '');
};
