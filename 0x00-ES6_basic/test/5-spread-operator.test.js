import concatArrays from '../5-spread-operator';

test('returns the right number of arguments', () => {
  expect(concatArrays(['a', 'b'], ['c', 'd'], 'Hello')).toBe([
    'a', 'b', 'c',
    'd', 'H', 'e',
    'l', 'l', 'o'
  ]);
});