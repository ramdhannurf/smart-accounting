
import Cookies from 'js-cookie'
import {LANGUAGE_COOKIE} from '../settings';

export async function switchLocaleAction(value: string) {
  Cookies.set(LANGUAGE_COOKIE, value);

  // It does not matter what we return here
  return {
    status: 'success',
  };
}
