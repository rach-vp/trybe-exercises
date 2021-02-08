const exercise = require('../code/randomNumber');


describe('test the function randomNumber', () => {

  test('function called once and returns the mocked value 6 from the mocked implementation', () => {
    exercise.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(exercise.randomNumber(1, 2, 3)).toBe(6);
    expect(exercise.randomNumber).toHaveBeenCalled();
    expect(exercise.randomNumber).toHaveBeenCalledTimes(1);
    expect(exercise.randomNumber).toHaveBeenCalledWith(1, 2, 3);
  });

  test('function called once and the original implementation', () => {
    exercise.randomNumber.mockReset();
    exercise.randomNumber.mockImplementation(n => n * 2);

    expect(exercise.randomNumber(3)).toBe(6);
    expect(exercise.randomNumber).toHaveBeenCalled();
    expect(exercise.randomNumber).toHaveBeenCalledTimes(1);
    expect(exercise.randomNumber).toHaveBeenCalledWith(3);
  });
});


