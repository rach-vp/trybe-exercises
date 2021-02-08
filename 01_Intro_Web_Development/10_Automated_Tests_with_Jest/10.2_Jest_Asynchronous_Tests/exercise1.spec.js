const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('convert lowercase to uppercase', () => {
  it('trybe must return TRYBE', () => {
    uppercase('trybe', (str) => {
      expect(str).toBe('TRYBE');
    });
  });
});