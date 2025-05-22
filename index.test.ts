import { add } from './index';

describe('add function', () => {
  it('should add three numbers correctly', () => {
    expect(add(1, 2, 3)).toBe(6);
    expect(add(0, 0, 0)).toBe(0);
    expect(add(-1, -2, -3)).toBe(-6);
  });

  it('should handle large numbers', () => {
    expect(add(1000000, 1000000, 1000000)).toBe(3000000);
  });

  it('should return NaN if any argument is not a number', () => {
    expect(add(1, 2, NaN)).toBeNaN();
    expect(add(1, '2' as any, 3)).toBeNaN();
    expect(add([], {} as any, null as any)).toBeNaN();
  });
});