import { divide } from './div';

describe('divide', () => {
  it('should divide two numbers correctly', () => {
    expect(divide(10, 5)).toBe(2);
    expect(divide(7, 2)).toBe(3.5);
    expect(divide(-8, 2)).toBe(-4);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed.');
  });

  it('should handle division with negative numbers', () => {
    expect(divide(-10, 5)).toBe(-2);
    expect(divide(10, -5)).toBe(-2);
    expect(divide(-10, -5)).toBe(2);
  });

  it('should handle division with decimal numbers', () => {
    expect(divide(10.5, 2)).toBe(5.25);
    expect(divide(7, 2.5)).toBe(2.8);
  });
});