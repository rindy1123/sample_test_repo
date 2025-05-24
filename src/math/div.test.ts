import { divide } from './div';

describe('divide', () => {
  it('should divide two positive numbers correctly', () => {
    expect(divide(10, 5)).toBe(2);
    expect(divide(8, 2)).toBe(4);
  });

  it('should divide a positive number by a negative number correctly', () => {
    expect(divide(10, -2)).toBe(-5);
    expect(divide(-8, 2)).toBe(-4);
  });

  it('should divide two negative numbers correctly', () => {
    expect(divide(-10, -5)).toBe(2);
    expect(divide(-12, -3)).toBe(4);
  });

  it('should divide a number by 1 correctly', () => {
    expect(divide(7, 1)).toBe(7);
    expect(divide(-5, 1)).toBe(-5);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrowError('Division by zero is not allowed.');
    expect(() => divide(-8, 0)).toThrowError('Division by zero is not allowed.');
  });
});