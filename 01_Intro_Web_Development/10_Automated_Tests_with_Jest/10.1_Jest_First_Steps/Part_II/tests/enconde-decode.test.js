const encode = require('../code/encode');
const decode = require('../code/decode');

describe('Test function enconde', () => {
  it('encode is indeed a function', () => {
    expect(typeof encode).toBe('function');
  })

  it('decode is indeed a function', () => {
    expect(typeof decode).toBe('function');
  })

  it('aeiou -> 12345', () => {
    expect(encode('aeiou')).toEqual('12345');
  });

  it('12345 -> aeiou', () => {
    expect(decode('12345')).toEqual('aeiou');
  });

  it('aeiou -> 72568', () => {
    expect(encode('aeiou')).not.toEqual('72568');
  });

  it('12345 -> qwerty', () => {
    expect(decode('12345')).not.toEqual('qwerty');
  });

  it('return has the same length as arg', () => {
    expect(encode('aeiou')).toHaveLength(5);
  });

  it('return has the same length as arg', () => {
    expect(decode('12345')).toHaveLength(5);
  });
});