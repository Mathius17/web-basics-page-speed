require('../scss/index.scss');

import { join } from 'lodash-es';
import { square } from './math';

function component(text) {
  let element = document.createElement('div');

  element.innerHTML = text;

  return element;
}

function stringComponent() {
  const text = join(['Hello', 'webpack'], ' ');

  return component(text);
}

function mathComponent(number) {
  const text = `${number} al cuadrado es igual a ${square(number)}`;

  return component(text);
}

document.body.appendChild(stringComponent());
document.body.appendChild(mathComponent(5));
