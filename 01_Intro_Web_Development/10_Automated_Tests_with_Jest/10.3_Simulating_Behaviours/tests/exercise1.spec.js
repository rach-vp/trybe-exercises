const exercise = require('../code/randomNumber');

test('function called once and returns the mocked value 10', () => {
  exercise.randomNumber = jest.fn().mockReturnValue(10);

  expect(exercise.randomNumber()).toBe(10);
  expect(exercise.randomNumber).toHaveBeenCalled();
  expect(exercise.randomNumber).toHaveBeenCalledTimes(1);
});
