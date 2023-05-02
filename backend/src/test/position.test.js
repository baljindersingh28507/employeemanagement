const servicePosition = require('../service/position.service')
const mongoose = require('mongoose');
// Test Case 1
// This test case will test whether the 

describe('positionRequests', () => {

  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/testdb');
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  afterEach(async () => {
    
  });

  test('Request to add position', async () => {
    const input = {
      body: {
        positionTitle: "vihuKaur",
        positionNumber: 4,
      }
    }
    const actualOutput = await servicePosition.addPosition(input)
    expect(actualOutput instanceof Object).toBe(true);
  }, 70000);
 
  test('Request to get position', async () => {
    const actualOutput = await servicePosition.getPosition()
    expect(actualOutput instanceof Object).toBe(true);
  }, 70000);
 
  test('Request to update position', async () => {
    const input = { params: { _id: "23344343" } }
    const actualOutput = await servicePosition.updatePosition(input)
    expect(actualOutput instanceof Object).toBe(true);
  }, 70000);
 
  test('Request to delete position', async () => {
    const input = { params: { _id: "23454353" } }
    return await servicePosition.deletePosition(input).then(
      actualOutput =>

        expect(actualOutput instanceof Object).toBe(true)
    )
  }, 70000);
});