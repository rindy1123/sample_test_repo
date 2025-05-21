import { add } from './index';

describe('add', () => {
  it('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-2, 3)).toBe(1);
    expect(add(0, 0)).toBe(0);
  });

  it('should handle large numbers', () => {
    expect(add(1000000000, 1000000000)).toBe(2000000000); 
  });

  it('should return NaN if either argument is not a number', () => {
    expect(add(2, NaN)).toBeNaN();
    expect(add(NaN, 3)).toBeNaN();
    expect(add(NaN, NaN)).toBeNaN();

    expect(add(2, null)).toBeNaN();
    expect(add(undefined, 3)).toBeNaN();

    expect(add(2, '3' as any)).toBeNaN();
    expect(add('2' as any, 3)).toBeNaN();
    expect(add({} as any, [] as any)).toBeNaN();
  });
});