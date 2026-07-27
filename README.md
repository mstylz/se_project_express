# WTWR (What to Wear?) — Backend API

## Description

This project is the backend server for the WTWR (What to Wear?) full-stack application.

The API allows users to register, sign in, manage their profiles, and create, like, unlike, and delete clothing items. Private routes are protected using JWT authentication, and users may only delete clothing items they own.

The backend is built with Node.js, Express, and MongoDB. It is deployed on a Google Cloud virtual machine behind Nginx, managed by PM2, and secured with HTTPS using Let's Encrypt.

## Live Application

**Frontend**

https://weather-app.jumpingcrab.com

**Backend API**

https://api.weather-app.jumpingcrab.com

## GitHub Repositories

**Backend**

https://github.com/mstylz/se_project_express

**Frontend**

https://github.com/mstylz/se_project_react

## Technologies and Techniques

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT authentication
- bcryptjs password hashing
- Celebrate and Joi request validation
- Validator
- Centralized error handling
- Custom error constructors
- Winston request and error logging
- CORS
- ESLint with Airbnb configuration
- Prettier
- PM2
- Nginx
- Google Cloud
- Let's Encrypt SSL

## Functionality

- User registration
- User login
- JWT-based authentication
- Protected API routes
- Retrieve the current user's profile
- Update the current user's name and avatar
- Retrieve all clothing items
- Create clothing items
- Delete clothing items with ownership authorization
- Like and unlike clothing items
- Validate incoming request data
- Return appropriate HTTP error responses
- Log requests and errors
- Automatically restart the server through PM2 after a crash

## API Endpoints

### Authentication

- `POST /signup` — create a user
- `POST /signin` — sign in and receive a JWT

### Users

- `GET /users/me` — get the current user's data
- `PATCH /users/me` — update the current user's name and avatar

### Clothing Items

- `GET /items` — get all clothing items
- `POST /items` — create a clothing item
- `DELETE /items/:id` — delete an owned clothing item
- `PUT /items/:id/likes` — like a clothing item
- `DELETE /items/:id/likes` — unlike a clothing item

## Running the Project Locally

Install dependencies:

```bash
npm install
```

Start the production server:

```bash
npm run start
```

Start the development server with hot reload:

```bash
npm run dev
```

Run the linter:

```bash
npm run lint
```

The backend runs locally at:

```text
http://localhost:3001
```

## Project Pitch Video

Check out [my WTWR full-stack project pitch video](https://drive.google.com/file/d/177DKcuWB7y1HU8riM0oCbkNUbfRN63hE/view?usp=drive_link), where I describe the complete frontend and backend application, the technologies used, challenges I encountered, and what I learned.

## Deployment

The application is deployed using:

- Google Cloud virtual machine
- Ubuntu
- Nginx reverse proxy
- PM2 process management
- MongoDB
- Let's Encrypt HTTPS certificates

A temporary `/crash-test` route is included for the Project 15 review so the reviewer can confirm that PM2 automatically restarts the server after an intentional crash. This route will be removed after the project passes review.

## Future Improvements

- Add automated integration tests
- Add password reset functionality
- Add refresh-token support
- Add rate limiting
- Improve API documentation
