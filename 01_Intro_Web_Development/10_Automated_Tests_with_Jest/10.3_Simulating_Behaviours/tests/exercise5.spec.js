const strings = require('../code/strings');

describe('test functions in the module strings', () => {
  test('function upper mocked to return lowercased string', () => {
    const upper = jest.spyOn(strings, "upper")
      .mockImplementation(str => str.toLowerCase());

    expect(strings.upper('TRYBE')).toBe('trybe');
    expect(strings.upper).toHaveBeenCalled();
    expect(strings.upper).toHaveBeenCalledTimes(1);
    expect(strings.upper).toHaveBeenCalledWith('TRYBE');

    strings.upper.mockRestore();

    expect(strings.upper('trybe')).toBe('TRYBE');
  });
});
