import { muliply } from './multi';

describe('muliply', () => {
  it('should multiply two positive numbers correctly', () => {
    expect(muliply(2, 3)).toBe(6);
    expect(muliply(10, 5)).toBe(50);
  });

  it('should multiply a positive and negative number correctly', () => {
    expect(muliply(2, -3)).toBe(-6);
    expect(muliply(-10, 5)).toBe(-50);
  });

  it('should multiply two negative numbers correctly', () => {
    expect(muliply(-2, -3)).toBe(6);
    expect(muliply(-10, -5)).toBe(50);
  });

  it('should multiply by zero correctly', () => {
    expect(muliply(2, 0)).toBe(0);
    expect(muliply(0, 5)).toBe(0);
    expect(muliply(0, 0)).toBe(0);
  });

  it('should multiply large numbers correctly', () => {
    expect(muliply(1000000, 2000000)).toBe(2000000000000);
  });

  it('should return NaN when multiplying with non-numbers', () => {
    expect(muliply(2, NaN)).toBe(NaN);
    expect(muliply(NaN, 5)).toBe(NaN);
    expect(muliply(NaN, NaN)).toBe(NaN);
  });
});