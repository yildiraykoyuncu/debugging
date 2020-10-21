'use strict';

/**
 * reverses a string of text
 * @param text {string} - the string of text to return
 * @example {string} a new string, the initial text backwards
 * const eert = reverse('tree');
 * console.assert(eert === 'eert');
 */
const reverser = (text = '') => {
  let reversedText = '';
  for (let i = text.length - 1; i >= 0; i--) {
    reversedText += text[i];
  }
  return reversedText;
};


const _1_expected = 'eert';
const _1_actual = reverser('tree');
const _1_test = _1_actual === _1_expected;
console.assert(_1_test, 'Test 1');

const _2_expected = '=-( )-=';
const _2_actual = reverser('=-) (-=');
const _2_test = _2_actual === _2_expected;
console.assert(_2_test, 'Test 2');

const _3_expected = 'racecar';
const _3_actual = reverser('racecar');
const _3_test = _3_actual === _3_expected;
console.assert(_3_test, 'Test 3');
