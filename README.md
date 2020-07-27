# Anywhere Fitness-Build Week

## Heroku API

https://anywherefitness-app.herokuapp.com/<br>

# `API Endpoints`

## Authentication

| Method | Endpoint       | Body (_Required_)        | Body (optional) | Notes                                                                 |
| ------ | -------------- | ------------------------ | --------------- | --------------------------------------------------------------------- |
| POST   | /auth/register | username, password, role | email           | Creates a new user. On success, returns newUser object.               |
| POST   | /auth/login    | username, password       | N/A             | Logs in users who already exists. On success, returns JSON Web Token. |

## Instructor

| Method | Endpoint                | Body (_Required_)                                                                            | Body (optional) | Notes                                                                 |
| ------ | ----------------------- | ------------------------                                                                     | --------------- | --------------------------------------------------------------------- |
| GET    | /instructor/classes     | N/A                                                                                          | N/A             | Returns an array of classes.                                          |
| GET    | /instructor/classes/:id | classid                                                                                      | N/A             | Returns a single class.                                               |
| POST   | /instructor/classes/:id | classname, location, date, time, classtype, duration, intensity, currentAttendeesNo, maxSize | N/A             | Creates a new class. On success assigns instructor to class and returns newClass.               |
| PUT    | /instructor/classes/:id | class, classid                                                                               | N/A             | Edits a class. On success returns newClass object.                    |
| DELETE | /instructor/classes/:id | classid                                                                                      | N/A             | Deletes a class. On success returns deletedClass object.             |
