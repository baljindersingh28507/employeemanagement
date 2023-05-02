const servicesUsers = require('../service/user.service')


describe('userRequests', () => {
  test('Request to add user', async () => {
    const input = {
      body: {
        "firstName": "vihuKaur",
        "lastName": "Kaur",
        "role": 3,
        "positionTitle": "JuniorManager",
        "positionNumber": "3",
        "employeeNumber": 45
      }
    }
    const actualOutput = await servicesUsers.createUser(input)
    expect(actualOutput instanceof Object).toBe(true);
  },70000 );
});

describe('userRequests', () => {
  test('Request to update user', async () => {
    const input = {
      body: {
        firstName: Date.now
      },
      params: { _id:"644fc91f2d45bc1dd391f924" }
    }
    const actualOutput = await servicesUsers.updateUser(input)
    expect(actualOutput instanceof Object).toBe(true);
  },80000);
});

describe('userRequests', () => {
  test('Request to add position', async () => {
    const input = {
      body: {
        positionTitle: "SeniorDeveloper"
      },
      params: { _id:"644fc91f2d45bc1dd391f924" }
    }
    const actualOutput = await servicesUsers.updateUser(input)
    expect(actualOutput instanceof Object).toBe(true);
  },80000);
});

describe('userRequests', () => {
  test('Request to get all user list', async () => {
    const actualOutput = await servicesUsers.getUserList()
    expect(actualOutput instanceof Object).toBe(true);
  });
});

describe('userRequests', () => {
  test('Request to get  user list by role', async () => {
    const input = {
      params: {
        positionTitle: "JuniorDeveloper"
      }
    }
    const actualOutput = await servicesUsers.getListByRole(input)
    expect(actualOutput instanceof Object).toBe(true);
  });
});