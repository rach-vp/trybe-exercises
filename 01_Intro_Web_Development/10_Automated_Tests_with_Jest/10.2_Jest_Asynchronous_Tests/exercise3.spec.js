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

describe('test the function getUserName', () => {
  it('should return the user name when a valid ID is provided', async () => {
    expect.assertions(2);
    const user4 = await getUserName(4);
    const user5 = await getUserName(5);
    expect(user4).toBe('Mark');
    expect(user5).toBe('Paul');
  });

  it('should return an error message when user is not found', async () => {
    expect.assertions(1);
    const wrongID = 1;
    try {
      await getUserName(wrongID)
    } catch ({ error }) {
      expect(error).toStrictEqual(`User ${wrongID} not found.`);
    }
  });
});
