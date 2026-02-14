# Express REST API – Clean Architecture

A RESTful API built with Express.js following a clean and scalable project structure.

## Features
- Express Router
- Controller-based architecture
- RESTful CRUD APIs
- JSON-based responses
- Proper HTTP status codes
- Centralized error handling
- Custom AppError class
- 404 (Route Not Found) middleware
- MongoDB database connection (Mongoose)
- Nodemon as a development dependency
- Dotenv Config

## Implemented APIs
- POST /users — Create user
- GET /users — Get all users
- GET /users/:id — Get a particular user
- PUT /users/:id — Updating a particular user
- Delete /users/:id — Deleting a particular user

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)

## Project Status
Learning project (Backend-focused)

## Project Structure
- routes/ user.routes.js → API route definitions
- controllers/ user.controller.js → Request handling logic
- models/ user.model.js → Mongoose schemas & models
- config/ db.js → Database configuration
- utils/ AppError.js → Custom Error handling & utilities
- app.js → Express configuration
- server.js → Application entry point