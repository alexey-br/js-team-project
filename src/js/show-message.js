import refs from './refs.js';

export function showMessage() {
  refs.errorOutput.classList.remove('visually-hidden');
}

export function hideMessage() {
  refs.errorOutput.classList.add('visually-hidden');
}
