
# Employee Management Project

# Its a web based application to show employees with designation.

Website url: http://3.141.0.246/

## Table of Contents

- [Technology Stack](#technologystack)
- [Installation](#installation)
- [API Details](#api)
- [Tests](#test)
- [Deployment](#deployment)

## Technology Stack
- Frontend: React.js library
- Backend: node.js/ Express
- Database: mongo.db
- Test: Jest Package

## Installation
## Frontend:
- Prequisite: Node.js version 12.1,
              Npm version > 6.0
              React.js > 17.0
              
Instructions 

To build the application you need to have node.js and Npm manager installed.

Installation of Frontend:

- First clone project url  https://github.com/baljindersingh28507/employeemanagement.git

- Navigate to project folder and choose frontend folder.

- In Terminal enter command  npm install

- To run locally enter command npm start

- Webapplication should run in browser locally


## Backend:

## Installation

-Clone this repository to your local machine.
-Navigate to the project directory in your terminal.
-Run npm install to install the project dependencies.

## Usage

To start the HTTP server, run the following command:

npm start

## Configuration 
The server port can be configured by setting the PORT environment variable. For example, to run the server on port 8080, run the following command:
PORT=8000 npm start



## Api Details

Restful API are consumed by frontend made in node.js/express

Following is the link to postman collection of API consumed by frontend
- Postman collection: https://api.postman.com/collections/20621400-120096a5-f9f0-4251-8a4a-2c99c2e6e4b2?access_key=PMAT-01GZEHKSX6J0WBVAWMEEETKZ2E

## Tests

Employee Management
Creating a Employee: When a employee is created with valid data, a new employee object should be added to the database with a unique ID and all the required fields populated. If any required fields are missing, an error should be thrown.

Updating a Employee
When a employee is updated with valid data, the corresponding  employee object in the database should be updated with the new values. If the specified employee ID does not exist, an error should be thrown.

Deleting a employee 
When a employee is deleted, the corresponding employee object should be removed from the database. If the specified employee ID does not exist, an error should be thrown.

Instructions to run Test cases

- Navigate to backend folder inside project.

- Run npm i to install node packages

- After installation, run command npm run test

- Executed test results should be visible in terminal

## AWS Deployment:

## Prerequisites
Instance: Ec2 t2.micro instance with linux or Ubuntu installed

Inbound rules required: port 22,443,80,22 and 8000 for node.js to be enabled

## Installation

 - sudo apt update
 
 - sudo apt install apache2
 
 - sudo ufw allow in "Apache"
 
 - sudo ufw status
 
 - if(status is inactive then use this command to enable(sudo ufw enable))
 
 - Check apache2 status :sudo systemctl status apache2 ,sudo service apache2 status

 - Hit ip address if it shown with apache2 home page then apach2 install successfully.
 

## Database installation

-  To install mongoDb run command sudo yum install -y mongodb-org

- To run mongoDb run command sudo systemctl start mongod

