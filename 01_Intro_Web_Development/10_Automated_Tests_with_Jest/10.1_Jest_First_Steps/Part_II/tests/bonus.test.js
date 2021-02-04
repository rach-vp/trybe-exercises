const searchEmploy = require('../code/bonus');

describe('Test function searchEmploy', () => {
  it('function exists', () => {
    expect(searchEmploy).toBeDefined();
  });

  it('searchEmploy is indeed a function', () => {
    expect(typeof searchEmploy).toBe('function');
  });

  it('search 8579-6 name returns Ana', () => {
    expect(searchEmploy('8579-6', 'firstName')).toBe('Ana');
  });

  it('id is not in the board returns ID not identified', () => {
    expect(searchEmploy('1234-5', 'firstName')).toBe('ID not identified');
  });

  it('info not in the board returns Unavailable information', () => {
    expect(searchEmploy('8579-6', 'xablau')).toBe('Unavailable information');
  });
});