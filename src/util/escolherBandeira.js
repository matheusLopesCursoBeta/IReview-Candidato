/* eslint-disable no-restricted-syntax */
import CardType from 'credit-card-type';
import Mastercard from '../assets/icons/mastercard.svg';
import Visa from '../assets/icons/visa.svg';
import Default from '../assets/icons/default.svg';
import Hipercard from '../assets/icons/hipercard.svg';
import Elo from '../assets/icons/elo.svg';

export default function escolherBandeira(numero) {
  numero = numero.toString();

  const card = CardType(numero);

  if (!card[0] || !numero) {
    return Mastercard;
  }

  switch (card[0].type) {
    case 'visa':
      return Visa;
    case 'mastercard':
      return Mastercard;
    case 'diners':
      return Default;
    case 'amex':
      return Default;
    case 'hipercard':
      return Hipercard;
    case 'elo':
      return Elo;
    default:
      break;
  }
}
