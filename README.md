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
* bcryptjs
* jsonwebtoken (JWT)
* ESLint (Airbnb config)
* Prettier
* Nodemon

---

## Functionality

* User signup and signin
* JWT-based authentication
* Protected API routes
* Retrieve and update current user data
* Create and manage clothing items
* Delete clothing items with ownership authorization
* Like and unlike clothing items
* Password hashing with bcryptjs
* Input validation for user and item data
* Error handling for invalid requests
* RESTful API structure

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

## Future Improvements

* Add centralized error handling middleware
* Deploy the API to a remote server
* Add HTTPS support
* Add automated testing
* Add refresh tokens and token expiration handling

## Notes

One of the GitHub Actions checks still references the Project 12 temporary authorization middleware in `app.js`.

For Project 13, the hardcoded `req.user` middleware was intentionally removed and replaced with JWT-based authentication and authorization, as required by the project specifications.

All Project 13 endpoints were manually tested successfully, including:
- signup/signin
- JWT authentication
- protected routes
- likes/dislikes
- ownership authorization
- protected deletion

  ## Project Pitch Video

Check out this video(https://www.loom.com/share/9092acd40dc546d0bb542ba2907ca0db), where I describe my project and the challenges I faced while building it.
