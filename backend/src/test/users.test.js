const servicesEmployee = require('../service/employee.service')
const mongoose = require('mongoose')

/*Test Case 1:
  This test case is used to test api to create employee 
    Input:intput will be an Object which contains four parameters and we will send this in body
    Input:{
            body: {
            "firstName": Date.now() + 'abc' ,
            "lastName": Date.now() + 'efg',
            "role": i++,
            "employeeNumber": j++
          }     
          }
    Output: output should be json representation which will contain employee details
    Output: "success": true,
            "message": "Employee created successfully",
            "data": {
            "firstName": "1683022624240abc",
            "lastName": "1683022674255efg",
            "role": 2,
            "employeeNumber": "2",
            "_id": "6450e0d2a7dfcb568a469cd4",
            "__v": 0
    } */

describe('employeeRequests', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/userApp');
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
  test('Request to add employee', async () => {
    let i = 5;
    let j = 1;
    const input = {
      body: {
        "firstName": Date.now() + 'abc',
        "lastName": Date.now() + 'efg',
        "role": 5,
        "employeeNumber": j++
      }
    }
    const actualOutput = await servicesEmployee.createUser(input)
    expect(actualOutput instanceof Object).toBe(true);
  }, 70000);
});



/*Test Case 2:
  This test case is used to test api to update employee first name
    Input:intput will be an Object which contains one parameter in body and one param in params
    Input:{
            body: {
            "firstName": Date.now() + 'abc' ,
          },
          params: {
            _id:6450bde8dff46ef8f50f6918
          }     
          }
    Output: output should be json representation which will contain employee details
    Output: "success": true,
            "message": "Employee updated successfully",
            "data": {
            "firstName": "1683022923958asd",
            "lastName": "1683022701077efg",
            "role": 2,
            "employeeNumber": "2",
            "_id": "6450e0d2a7dfcb568a469cd4",
            "__v": 0
//     } */
describe('employeeRequests', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/userApp');
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
  test('Request to update employee', async () => {
    const input = {
      body: {
        firstName: 'Neena',
      },
      params: { id:'6450f601e18a72a0e3b5271e' }
    }
    const actualOutput = await servicesEmployee.updateUser(input)
    expect(actualOutput instanceof Object).toBe(true);
  }, 80000);
});





/*Test Case 3:
  This test case is used to test api to delete  an employees 
    Output: output should be an object representation  which will contain deleted employee details
    Output: "success": true,
            "message": "Employees deleted successfully",
            "data":
               {
            "firstName": "1683022923958asd",
            "lastName": "1683022701077efg",
            "role": 2,
            "employeeNumber": "2",
            "_id": "6450e0d2a7dfcb568a469cd4",
            "__v": 0
    }
    } */
    describe('employeeRequests', () => {
      beforeAll(async () => {
        await mongoose.connect('mongodb://localhost/userApp');
      });
    
      afterAll(async () => {
        await mongoose.connection.close();
      });
     
      test('Request to delete  employee ', async () => {
        const input = {params:{
            id:'6450f601e18a72a0e3b5271e'
        }}
        const actualOutput = await servicesEmployee.deleteUser(input)
        expect(actualOutput instanceof Object).toBe(true);
      },70000);
    });

/*Test Case 4:
  This test case is used to test api to get all employees list
    Output: output should be an array  which will contain employee details
    Output: "success": true,
            "message": "Employees list get successfully",
            "data": [
               {
            "firstName": "1683022923958asd",
            "lastName": "1683022701077efg",
            "role": 2,
            "employeeNumber": "2",
            "_id": "6450e0d2a7dfcb568a469cd4",
            "__v": 0
    },
    {
            "firstName": "1683022624240abc",
            "lastName": "1683022674255efg",
            "role": 2,
            "employeeNumber": "2",
            "_id": "6450e0d2a7dfcb568a469cd4",
            "__v": 0
    }

            ]
    } */

describe('employeeRequests', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/userApp');
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
  test('Request to get all employee list', async () => {
    const actualOutput = await servicesEmployee.getUserList()
    expect(actualOutput instanceof Object).toBe(true);
  });
});

/*Test Case 4:
  This test case is used to test api to add position of an employee
    Input:intput will be an Object which contains one parameter in body and one param in params
    Input:{
            body: {
            "positionTitle": '6450bde8dff46ef8f50f6918' ,
          },
          params: {
            _id:6450a3f16a29458d3dbb6311
          }     
          }
    Output: output should be an Object representation  which will contain employee details
    Output: "success": true,
            "message": "Employees list get successfully",
            "data": "success": true,
            "message": "New Position of employee added successfully",
            "data": {
                "acknowledged": true,
                "modifiedCount": 1,
                "upsertedId": null,
                "upsertedCount": 0,
                "matchedCount": 1
    }
    } */
describe('employeeRequests', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/userApp');
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
  test('Request to add new position', async () => {
    const input = {
      params:{
       id:"6450a3f16a29458d3dbb6311"
         },
      body: {
        positionId: "6450bde8dff46ef8f50f6918"
      }
    }
    const actualOutput = await servicesEmployee.addPosition(input)
    expect(actualOutput instanceof Object).toBe(true);
  },70000);
});

/*Test Case 5:
  This test case is used to test api to add position of an employee data should be acknowledged by DataBase
    Input:intput will be an Object which contains one parameter in body and one param in params
    Input:{
            body: {
            "positionTitle": '6450bde8dff46ef8f50f6918' ,
          },
          params: {
            _id:6450a3f16a29458d3dbb6311
          }     
          }
    Output: output should be an Object representation  which will contain employee details
    Output: "success": true,
            "message": "Employees list get successfully",
            "data": "success": true,
            "message": "New Position of employee added successfully",
            "data": {
                "acknowledged": true,
                "modifiedCount": 1,
                "upsertedId": null,
                "upsertedCount": 0,
                "matchedCount": 1
    }
    } */
describe('employeeRequests', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/userApp');
  });
  afterAll(async () => {
    await mongoose.connection.close();
  });
  test('Request to add new position of associated employee ', async () => {
    const input = {
      params:{
       id:"6450a3f16a29458d3dbb6311"
         },
      body: {
        positionId: "6450bde8dff46ef8f50f6918"
      }
    }
    const actualOutput = await servicesEmployee.addPosition(input)
    const {acknowledged} = actualOutput
    expect(acknowledged).toBe(true);
  },70000);
});

/*Test Case 6:
  This test case is used to test api to add lastName of employee 
    Input:intput will be an Object which contains one parameter in body and one param in params
    Input:lastName of input will be {"lastName": 'Kumar'}
    Output: lastName of output Should be {"lastName": 'Kumar'}
     */
describe('employeeRequests', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/userApp');
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
  test('Request to add lastName of employee', async () => {
    let j = 1;
    const input = {
      body: {
        "firstName": Date.now() + 'abc',
        "lastName": 'Kumar',
        "role": 5,
        "employeeNumber": j++
      }
    }
    const actualOutput = await servicesEmployee.createUser(input)
    const {lastName} = actualOutput
    expect(lastName).toBe('Kumar');
  }, 70000);
});

/*Test Case 7:
  This test case is used to test api to add role of employee 
    Input:intput will be an Object which contains one parameter in body and one param in params
    Input:lastName of input will be {"role": 5}
    Output: lastName of output Should be {"role":5}
     */
describe('employeeRequests', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/userApp');
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
  test('Request to add role of employee', async () => {
    let j = 1;
    const input = {
      body: {
        "firstName": Date.now() + 'abc',
        "lastName": 'Kumar',
        "role": 5,
        "employeeNumber": j++
      }
    }
    const actualOutput = await servicesEmployee.createUser(input)
    const {role} = actualOutput
    expect(role).toBe(5);
  }, 70000);
});

describe('employeeRequests', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/userApp');
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
  test('Request to add employee firstName', async () => {
    let j = 2;
    const input = {
      body: {
        "firstName": 'Reena',
        "lastName": Date.now() + 'efg',
        "role": 5,
        "employeeNumber": j++
      }
    }
    const output = await servicesEmployee.createUser(input)
    const {firstName} = output
    expect(firstName).toBe('Reena');
  }, 70000);
});

describe('employeeRequests', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/userApp');
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
  test('Request to update employee data', async () => {
    const input = {
      body: {
        firstName: 'Amar',
      },
      params: { id:'6450f284da0c3f854a90ee7f' }
    }
    const actualOutput = await servicesEmployee.updateUser(input)
    const {acknowledged} = actualOutput
    expect(acknowledged).toBe(true);
  }, 80000);
});

describe('employeeRequests', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/userApp');
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
  test('Request to add employee all fields', async () => {
    const input = {
      body: {
        "firstName": '',
        "lastName": '',
        "role": '',
        "employeeNumber": ""
      }
    }
    const actualOutput = await servicesEmployee.createUser(input)
    console.log(actualOutput);
    expect(actualOutput instanceof Error).toBe(true);
  }, 70000);
});

describe('employeeRequests', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/userApp');
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
  test('Request to add employee and employeeNumber should not be empty', async () => {
   
    const input = {
      body: {
        "firstName": 'Raman',
        "lastName": 'preet',
        "role": '2',
        "employeeNumber":""
      }
    }
    const actualOutput = await servicesEmployee.createUser(input)
    console.log(actualOutput);
    expect(actualOutput instanceof Error).toBe(true);
  }, 70000);
});

describe('employeeRequests', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/userApp');
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
  test('Request to add employee and role should not be empty', async () => {
   
    const input = {
      body: {
        "firstName": 'Raman',
        "lastName": 'preet',
        "role": '',
        "employeeNumber":"4"
      }
    }
    const actualOutput = await servicesEmployee.createUser(input)
    console.log(actualOutput);
    expect(actualOutput instanceof Error).toBe(true);
  }, 70000);
});

describe('employeeRequests', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/userApp');
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
  test('Request to add employee and firstName should not be empty', async () => {
   
    const input = {
      body: {
        "firstName": '',
        "lastName": 'preet',
        "role": '4',
        "employeeNumber":"4"
      }
    }
    const actualOutput = await servicesEmployee.createUser(input)
    console.log(actualOutput);
    expect(actualOutput instanceof Error).toBe(true);
  }, 70000);
});

describe('employeeRequests', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/userApp');
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
  test('Request to add employee and lastName should not be empty', async () => {
   
    const input = {
      body: {
        "firstName": 'manreet',
        "lastName": '',
        "role": '4',
        "employeeNumber":"4"
      }
    }
    const actualOutput = await servicesEmployee.createUser(input)
    console.log(actualOutput);
    expect(actualOutput instanceof Error).toBe(true);
  }, 70000);
});