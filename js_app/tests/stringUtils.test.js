const { isPalindrome } = require('../src/stringUtils');

test('radar_palindromo', () => {
  expect(isPalindrome('radar')).toBe(true);
});

test('Radar_palindromo', () => {
  expect(isPalindrome('Radar')).toBe(true);
});

test('anita_palindromo', () => {
  expect(isPalindrome('anita lava la tina')).toBe(true);
});

test('python_palindromo', () => {
  expect(isPalindrome('python')).toBe(false);
});

test('empty_palindromo', () => {
  expect(isPalindrome('')).toBe(true);
});
