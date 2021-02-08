const dog = require('../code/dogPictures');

describe('test the fetchDoggo requisition', () => {
  dog.fetchDoggo = jest.fn();
  afterEach(dog.fetchDoggo.mockReset);

  test('the promise resolving', () => {
    dog.fetchDoggo.mockResolvedValue('success');

    expect(dog.fetchDoggo()).resolves.toBe('success');
    expect(dog.fetchDoggo).toHaveBeenCalled();
    expect(dog.fetchDoggo).toHaveBeenCalledTimes(1);
  });

  test('the promise rejecting', () => {
    dog.fetchDoggo.mockRejectedValue('fail');

    expect(dog.fetchDoggo()).rejects.toBe('fail');
    expect(dog.fetchDoggo).toHaveBeenCalled();
    expect(dog.fetchDoggo).toHaveBeenCalledTimes(1);
  });
});
