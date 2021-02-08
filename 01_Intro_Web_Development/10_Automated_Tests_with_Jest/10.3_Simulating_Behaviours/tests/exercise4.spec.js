const strings = require('../code/strings');
jest.mock('../code/strings');

describe('test functions in the module strings', () => {
  test('function upper mocked to return lowercased string', () => {
    strings.upper.mockImplementation(str => str.toLowerCase());

    expect(strings.upper('TRYBE')).toBe('trybe');
    expect(strings.upper).toHaveBeenCalled();
    expect(strings.upper).toHaveBeenCalledTimes(1);
    expect(strings.upper).toHaveBeenCalledWith('TRYBE');
  });

  test('function firstLetter mocked to return the last letter', () => {
    strings.firstLetter.mockImplementation(str => str[str.length - 1]);

    expect(strings.firstLetter('trybe')).toBe('e');
    expect(strings.firstLetter).toHaveBeenCalled();
    expect(strings.firstLetter).toHaveBeenCalledTimes(1);
    expect(strings.firstLetter).toHaveBeenCalledWith('trybe');
  });

  test('function cat mocked to return lowercased string', () => {
    strings.cat.mockImplementation((str1, str2, str3) => str1.concat(str2, str3));

    expect(strings.cat('my', 'NameIs', 'Raquel')).toBe('myNameIsRaquel');
    expect(strings.cat).toHaveBeenCalled();
    expect(strings.cat).toHaveBeenCalledTimes(1);
    expect(strings.cat).toHaveBeenCalledWith('my', 'NameIs', 'Raquel');
  });
});