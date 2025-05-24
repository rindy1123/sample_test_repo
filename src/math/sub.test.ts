import { subtract } from './sub';

describe('subtract', () => {
  it('subtracts two positive numbers correctly', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it('subtracts a positive and negative number correctly', () => {
    expect(subtract(5, -3)).toBe(8);
  });

  it('subtracts two negative numbers correctly', () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  it('returns 0 when subtracting a number from itself', () => {
    expect(subtract(5, 5)).toBe(0);
  });

  it('handles subtracting 0 correctly', () => {
    expect(subtract(5, 0)).toBe(5);
    expect(subtract(0, 5)).toBe(-5);
  });

  it('returns a negative number when subtracting a larger number from a smaller one', () => {
    expect(subtract(3, 5)).toBe(-2);
  });
});