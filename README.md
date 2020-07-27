# Anywhere Fitness-Build Week

## Heroku API

https://anywherefitness-app.herokuapp.com/<br>

# `API Endpoints`

## Authentication

| Method | Endpoint       | Body (_Required_)        | Body (optional) | Notes                                                                 |
| ------ | -------------- | ------------------------ | --------------- | --------------------------------------------------------------------- |
| POST   | /auth/register | username, password, role | email           | Creates a new user. On success, returns newUser object.               |
| POST   | /auth/login    | username, password       | N/A             | Logs in users who already exists. On success, returns JSON Web Token. |
