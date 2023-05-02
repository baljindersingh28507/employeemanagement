const servicesUsers = require('../service/user.service')


// describe('userRequests', () => {
//   test('Request to add employee', async () => {
//     const input = {
//       body: {
//         "firstName": "vihuKaur",
//         "lastName": "Kaur",
//         "role": 3,
//         "positionTitle": "JuniorManager",
//         "positionNumber": "3",
//         "employeeNumber": 45
//       }
//     }
//     const actualOutput = await servicesUsers.createUser(input)
//     expect(actualOutput instanceof Object).toBe(true);
//   },70000 );
// });

// describe('userRequests', () => {
//   test('Request to update employee', async () => {
//     const input = {
//       body: {
//         firstName: Date.now
//       },
//       params: { _id:"644fc91f2d45bc1dd391f924" }
//     }
//     const actualOutput = await servicesUsers.updateUser(input)
//     expect(actualOutput instanceof Object).toBe(true);
//   },80000);
// });

// describe('userRequests', () => {
//   test('Request to add position', async () => {
//     const input = {
//       body: {
//         positionTitle: "SeniorDeveloper"
//       },
//       params: { _id:"644fc91f2d45bc1dd391f924" }
//     }
//     const actualOutput = await servicesUsers.updateUser(input)
//     expect(actualOutput instanceof Object).toBe(true);
//   },80000);
// });

// describe('userRequests', () => {
//   test('Request to get all employee list', async () => {
//     const actualOutput = await servicesUsers.getUserList()
//     expect(actualOutput instanceof Object).toBe(true);
//   });
// });

// describe('userRequests', () => {
//   test('Request to get  employee list by position', async () => {
//     const input = {
//       params: {
//         positionTitle: "JuniorDeveloper"
//       }
//     }
//     const actualOutput = await servicesUsers.getListByRole(input)
//     expect(actualOutput instanceof Object).toBe(true);
//   });
// });

// describe('userRequests', () => {
    //   test('Request to delete all employee ', async () => {
        // const input = {params:{
        //     _id:id
        // }}
    //     const actualOutput = await servicesUsers.deleteUser()
    //     expect(actualOutput instanceof Object).toBe(true);
    //   });
    // });