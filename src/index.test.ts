import { add } from './index';

describe('add', () => {
  it('should add two positive numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(10, 20)).toBe(30);
  });

  it('should add a positive and negative number correctly', () => {
    expect(add(5, -3)).toBe(2);
    expect(add(-8, 12)).toBe(4);
  });

  it('should add two negative numbers correctly', () => {
    expect(add(-2, -3)).toBe(-5);
    expect(add(-10, -20)).toBe(-30);
  });

  it('should add zero correctly', () => {
    expect(add(0, 5)).toBe(5);
    expect(add(7, 0)).toBe(7);
    expect(add(0, 0)).toBe(0);
  });

  it('should handle large numbers correctly', () => {
    expect(add(1000000, 2000000)).toBe(3000000);
    expect(add(-5000000, -7000000)).toBe(-12000000);
  });
});