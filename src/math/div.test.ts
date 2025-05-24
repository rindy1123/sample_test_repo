import { divide } from './div';

describe('divide', () => {
  it('should divide two numbers correctly', () => {
    expect(divide(10, 5)).toBe(2);
    expect(divide(7, 2)).toBe(3.5);
    expect(divide(-8, 4)).toBe(-2);
  });

  it('should throw an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrowError('Division by zero is not allowed.');
  });

  it('should handle division with negative numbers', () => {
    expect(divide(-10, 5)).toBe(-2);
    expect(divide(10, -5)).toBe(-2);
    expect(divide(-10, -5)).toBe(2);
  });

  it('should handle division with decimal numbers', () => {
    expect(divide(5.5, 2)).toBe(2.75);
    expect(divide(10, 3.5)).toBeCloseTo(2.857);
  });
});