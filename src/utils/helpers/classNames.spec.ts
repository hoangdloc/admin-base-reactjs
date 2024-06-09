/* eslint-disable @typescript-eslint/no-magic-numbers */
import { cn } from './classNames';

describe('cn function', () => {
  it('should return empty string for no arguments', () => {
    expect(cn()).toBe('');
  });

  it('should correctly concatenate class names', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  it('should ignore null and undefined values', () => {
    expect(cn('class1', null, undefined, 'class2')).toBe('class1 class2');
  });

  it('should ignore non-string values', () => {
    expect(cn('class1', 123, true, 'class2')).toBe('class1 123 class2');
  });

  it('should handle array of class names', () => {
    expect(cn(['class1', 'class2', 'class3'])).toBe('class1 class2 class3');
  });

  it('should handle nested array of class names', () => {
    expect(cn(['class1', ['class2', 'class3']])).toBe('class1 class2 class3');
  });
});
