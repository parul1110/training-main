
# App contains both client and server code
## Client

This folder contains the front-end code for the application.

## Technologies Used

- React
- HTML
- SCSS
- JavaScript

## Getting Started

1. Install dependencies: `npm install`
2. Start the development server: `npm start`
3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the client.

### Environment Variables

The following environment variables need to be set for the server:

- `REACT_APP_BACKEND_API_URL`: The url for the backend application, using [http://localhost:8080](http://localhost:8080) for local development.
- `REACT_APP_STORAGE_ENCRYPTION_KEYUSER`: The encryption key used to store data in local storage.

## Server

The server folder contains the back-end code for the application.

### Technologies Used

- Node.js
- Express.js
- MongoDB

### Getting Started

1. Install dependencies: `npm install`
2. Start the server: `npm start`
3. The server will be running on [http://localhost:8080](http://localhost:8080).

### Environment Variables

The following environment variables need to be set for the server:

- `PORT`: The port number for the server (default: 8080).
- `DB_USER`: The User name for the MongoDB database.
- `DB_PASSWORD`: The password for the MongoDB database.
- `JWT_SECRET`: The secret key used for JWT token generation.

### Health Check API

The server exposes a `/health` endpoint that can be used to check the health of the server. Sending a GET request to `/health` will return a JSON response indicating the server's status.

### API Documentation

The API documentation for the server can be accessed at [http://localhost:8080/api-docs](http://localhost:8080/api-docs). It provides detailed information about the available endpoints, request/response formats, and authentication requirements.
