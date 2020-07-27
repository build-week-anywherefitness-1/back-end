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

| Method | Endpoint                | Body (_Required_)                                                                            | Body (optional) | Notes                                                     |
| ------ | ----------------------- | -------------------------------------------------------------------------------------------- | --------------- | --------------------------------------------------------- |
| GET    | /instructor/classes     | N/A                                                                                          | N/A             | Returns an array of classes.                              |
| GET    | /instructor/classes/:id | classid                                                                                      | N/A             | Returns a single class.                                   |
| POST   | /instructor/classes     | classname, location, date, time, classtype, duration, intensity, currentAttendeesNo, maxSize | N/A             | Creates a new class. On success return newClass object.   |
| PUT    | /instructor/classes/:id | class, classid                                                                               | N/A             | Edits a class. On success returns newClass object.        |
| DELETE | /instructor/classes/:id | classid                                                                                      | N/A             | Deletes a class. On success returns deletedClass objects. |

## Client

| Method | Endpoint                 | Body (_Required_) | Body (optional) | Notes                                                      |
| ------ | ------------------------ | ----------------- | --------------- | ---------------------------------------------------------- |
| GET    | /client/classes/all      | N/A               | N/A             | Returns an array of classes are avalibale                  |
| GET    | /client/classes/         | N/A               | N/A             | Returns an array of classes of current client enrolled in. |
| GET    | /client/classes/:id      | classid           | N/A             | Returns a single class.                                    |
| POST   | /client/classes/:classid | N/A               | N/A             | Enroll a class, return the class information               |
| DELETE | /client/:classid         | N/A               | N/A             | Cancel the enrollment of a class.                          |
