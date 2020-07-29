# Anywhere Fitness-Build Week

## Heroku API

https://app-anywherefitness.herokuapp.com/api

# `API Endpoints`

## Authentication

| Method | Endpoint       | Body (_Required_)        | Body (optional) | Notes                                                                 |
| ------ | -------------- | ------------------------ | --------------- | --------------------------------------------------------------------- |
| POST   | /auth/register | username, password, role | email           | Creates a new user. On success, returns newUser object.               |
| POST   | /auth/login    | username, password       | N/A             | Logs in users who already exists. On success, returns JSON Web Token. |

## Instructor

| Method | Endpoint                | Body (_Required_)                | Body (optional)                                             | Notes                                                     |
| ------ | ----------------------- | -------------------------------- | ----------------------------------------------------------- | --------------------------------------------------------- |
| GET    | /instructor/classes/all | N/A                              | N/A                                                         | Returns an array of classes are avalibale                 |
| GET    | /instructor/classes     | N/A                              | N/A                                                         | Returns an array of classes of the logged in instructor.  |
| GET    | /instructor/classes/:id | N/A                              | N/A                                                         | Returns a single class.                                   |
| POST   | /instructor/classes     | classname, location, date, time, | classtype, duration, intensity, currentAttendeesNo, maxSize | Creates a new class. On success return newClass object.   |
| PUT    | /instructor/classes/:id | object of new updated info;      | N/A                                                         | Edits a class. On success returns newClass object.        |
| DELETE | /instructor/classes/:id | N/A                              | N/A                                                         | Deletes a class. On success returns deletedClass objects. |

## Client

| Method | Endpoint                 | Body (_Required_)           | Body (optional) | Notes                                                      |
| ------ | ------------------------ | --------------------------- | --------------- | ---------------------------------------------------------- |
| GET    | /client/classes/all      | N/A                         | N/A             | Returns an array of classes are avalibale                  |
| GET    | /client/classes/         | N/A                         | N/A             | Returns an array of classes of current client enrolled in. |
| GET    | /client/classes/:id      | N/A                         | N/A             | Returns a single class.                                    |
| POST   | /client/classes/:classid | N/A                         | N/A             | Enroll a class, return the class information               |
| PUT    | /client/classes/:id      | object of new updated info; | N/A             | Edits a class. On success returns newClass object.         |
| DELETE | /client/:classid         | N/A                         | N/A             | Cancel the enrollment of a class.                          |

## Data Exapmle

user :
{
username: "LambdaInstructor",
password: "12345678",
email: "lambdaInstructor@lambda.com",
role: "instructor",
},
{
username: "LambdaClient",
password: "12345678",
email: "lambdaClient@lambda.com",
role: "client",
},

class :

     {
          id: 1,
          classname: "Yoga",
          location: "Anywhere Fitness",
          date: "08/05/2020",
          time: "12:00",
          classtype: "Yoga",
          duration: "1h",
          intensityLevel: "Beginner",
          currentAttendeesNo: 0,
          maxsize: 30,
        },
           {
          id: 2,
          classname: "Kickboxing",
          location: "Anywhere Fitness",
          date: "08/06/2020",
          time: "15:00",
          classtype: "Kickboxing",
          duration: "1h",
          intensityLevel: "Intermediate",
          currentAttendeesNo: 0,
          maxsize: 30,
        },

userclass :

{ userid: 1, classid: 1 },
{ userid: 1, classid: 2 },
{ userid: 1, classid: 3 },
{ userid: 2, classid: 2 },
{ userid: 2, classid: 4 },
{ userid: 2, classid: 6 },
