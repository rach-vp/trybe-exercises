const sum = require('./sum');

describe('Test function sum()', () => {
  it('sum() is a function', () => {
    expect(typeof sum).toEqual('function');
  });

  it('4 + 5 = 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  it('0 + 0 = 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  it('4 + string 5 return error', () => {
    expect(() => sum(4, '5')).toThrow(TypeError);
  });

  it('4 + string 5 return error', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
});
