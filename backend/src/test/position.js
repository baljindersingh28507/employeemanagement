const servicePosition = require('../service/position.service')

/* Test Case 1:
 This test case is used to test api to add position
    Input:intput will be an Object which contains two parameters and we will send this in body
    Input:{
             positionTitle: "vihuKaur",
              positionNumber: 4,      
             }
    Output: output should be json representation which will contain position details
    Output:  "success": true,
             "message": "Position added successfully",
            "data": {
               "positionNumber": "2",
               "positionTitle": "Manager",
            "_id": "6450d7c9a4bf1c11aa3a9bc2",
             "__v": 0
       } */

describe('positionRequests', () => {
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
});

/* Test Case 2:
 This test case is used to test api to get position
  Output: output should be json representation which will contain position data with details
  Output: {
        "success": true,
        "message": "Position get successfully",
        "data": [
            {
                "_id": "6450bde8dff46ef8f50f6918",
                "positionNumber": "1",
                "positionTitle": "Director",
                "__v": 0
            },
            {
                "_id": "6450d7c9a4bf1c11aa3a9bc2",
                "positionNumber": "2",
                "positionTitle": "Manager",
                "__v": 0
            }
        ]
} */
describe('positionRequests', () => {
    test('Request to get position', async () => {
        const actualOutput = await servicePosition.getPosition()
        expect(actualOutput instanceof Object).toBe(true);
    }, 70000);
});

/* Test Case 3:
 This test case is used to test api to update position
    Input:intput will be an Object which contains one parameter and we will send this in params
    Input:{{ params: { _id: id } }     
    Output: output should be json representation which will contain position data with details
    Output: {
         "success": true,
    "message": "Position updated successfully",
    "data": {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
    }
        
} */
describe('positionRequests', () => {
    test('Request to update position', async () => {
        const input = { params: { _id: id },body:{} }
        const actualOutput = await servicePosition.updatePosition(input)
        expect(actualOutput instanceof Object).toBe(true);
    }, 70000);
});

describe('positionRequests', () => {
    test('Request to delete position', async () => {
        const input = { params: { _id: id } }
        const actualOutput = await servicePosition.deletePosition(input)
        expect(actualOutput instanceof Object).toBe(true);
    }, 70000);
});