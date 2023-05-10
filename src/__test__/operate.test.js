import operate from '../logic/operate';

describe('operate', () => {
  test('1 + 2 to return 3', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });
  test('1 - 2 to return -1', () => {
    expect(operate(1, 2, '-')).toBe('-1');
  });
  test('5 + 3 to return 15', () => {
    expect(operate(5, 3, 'x')).toBe('15');
  });
  test('20 ÷ 4 to return 5', () => {
    expect(operate(20, 4, '÷')).toBe('5');
  });
  test('5 % 2 to return 1', () => {
    expect(operate(5, 2, '%')).toBe('1');
  });
  test('Should throw an error if a wrong operator is used', () => {
    expect(() => operate(1, 1, '++')).toThrowError(/Unknown operation/);
  });
});