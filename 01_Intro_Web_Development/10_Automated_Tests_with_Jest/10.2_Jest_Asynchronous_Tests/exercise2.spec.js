const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      };

      return reject({ error: `User ${id} not found.` });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

getUserName(4).catch(({ error }) => console.log(error));

describe('test the function getUserName', () => {
  it('should return the user name when a valid ID is provided', () => {
    expect.assertions(2);
    getUserName(4).then(name => {
      expect(name).toBe('Mark');
    });
    getUserName(5).then(name => {
      expect(name).toBe('Paul');
    });
  });

  it('should return an error message when user is not found', () => {
    expect.assertions(1);
    const wrongID = 1;
    return getUserName(wrongID)
      .catch(({ error }) => expect(error).toBe(`User ${wrongID} not found.`));
  });
});
