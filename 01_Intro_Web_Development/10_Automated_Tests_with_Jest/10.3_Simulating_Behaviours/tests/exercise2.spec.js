const exercise = require('../code/randomNumber');

test('function called once and returns the mocked value 2 from the mocked mockImplementation', () => {
  exercise.randomNumber = jest.fn().mockImplementation((a, b) => a / b);

  expect(exercise.randomNumber(4, 2)).toBe(2);
  expect(exercise.randomNumber).toHaveBeenCalled();
  expect(exercise.randomNumber).toHaveBeenCalledTimes(1);
  expect(exercise.randomNumber).toHaveBeenCalledWith(4, 2);
});
