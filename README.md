# WTWR (What to Wear?): Back End

## Description

This project is the back-end server for the WTWR (What to Wear?) application. It provides a RESTful API that allows users to create accounts, manage clothing items, and interact with item data.

The server is built using Node.js and Express, with MongoDB as the database. It includes user authorization and data validation.

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* ESLint (Airbnb config)
* Prettier
* Nodemon

---

## Functionality

* Create and manage users
* Retrieve user data
* Create clothing items
* Delete clothing items
* Like and unlike items
* Input validation for data fields
* Error handling for invalid requests
* REST API structure

---

## Running the Project

`npm run start` — starts the server
`npm run dev` — starts the server with hot reload (nodemon)

---

## Testing

Before committing your code, update the `sprint.txt` file in the root directory with the current sprint number.

Example:

```
12
```

---

## API Endpoints (Example)

* `GET /users` — get all users

* `GET /users/:id` — get user by ID

* `POST /users` — create a user

* `GET /items` — get all clothing items

* `POST /items` — create an item

* `DELETE /items/:id` — delete an item

---

## Future Improvements

* Add authentication with JWT
* Add password hashing
* Deploy to a remote server
