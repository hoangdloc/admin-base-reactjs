/* eslint-disable @typescript-eslint/no-magic-numbers */
import { squashObject } from './squashObject.util';

describe('squashObject', () => {
  it('should flatten a nested object', () => {
    const input = {
      a: {
        b: {
          c: 1,
          d: 2,
        },
        e: 3,
      },
      f: 4,
    };
    const output = squashObject(input);
    expect(output).toEqual({
      'a.b.c': 1,
      'a.b.d': 2,
      'a.e': 3,
      f: 4,
    });
  });

  it('should handle arrays correctly', () => {
    const input = {
      a: [1, 2, 3],
      b: {
        c: [4, 5, 6],
      },
    };
    const output = squashObject(input);
    expect(output).toEqual({
      a: [1, 2, 3],
      'b.c': [4, 5, 6],
    });
  });

  it('should handle primitive values correctly', () => {
    const input = {
      a: 1,
      b: 'string',
      c: true,
    };
    const output = squashObject(input);
    expect(output).toEqual({
      a: 1,
      b: 'string',
      c: true,
    });
  });
});
