function sum(a, b) {
  return a + b;
}

test('sum of 2+3 should be 5', () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});
