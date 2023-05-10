import calculate from '../logic/calculate';

describe('test the calculate function', () => {
  test('it should return sum of output', () => {
    const object = { total: '3', next: '6', operation: '+' };
    const buttonName = '=';
    const output = calculate(object, buttonName);
    expect(output.total).toBe('9');
  });
  test('it should return sum of output', () => {
    const object = { total: '45', next: '34', operation: '+' };
    const buttonName = '=';
    const output = calculate(object, buttonName);
    expect(output.total).toBe('79');
  });
  test('it should return subtract of output', () => {
    const object = { total: '15', next: '5', operation: '-' };
    const buttonName = '=';
    const output = calculate(object, buttonName);
    expect(output.total).toBe('10');
  });
});
