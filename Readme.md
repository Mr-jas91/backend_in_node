# Node.js Backend Project

This is a backend application built using Node.js that handles user registration, login, and logout functionalities. Users can also upload their avatar and cover photo during registration. The data is stored in a database.

## Features

- User Registration: Allows users to create an account. Users can upload an avatar and cover photo during registration.
- User Login: Authenticates users based on their credentials.
- User Logout: Allows users to log out from their account.
- File Upload: Supports uploading of avatar and cover photo during registration.

## Technologies Used

- Node.js: JavaScript runtime environment.
- Express.js: Web framework for Node.js.
- Multer: Middleware for handling multipart/form-data for file uploads.
- MongoDB: Database for storing user data.
- Mongoose: Object Data Modeling (ODM) library for MongoDB and Node.js.
- JWT: JSON Web Token for authentication.
  Getting Started
  Prerequisites
- Node.js installed on your machine
  MongoDB server or MongoDB Atlas account
  Installation

1. Clone the repository:

```
git clone https://github.com/Mr-jas91/backend_in_nodejs.git
cd your-repo-name
```

2. Install dependencies:

```
npm install
```

3. Create a .env file in the root directory and add the following environment variables:

```
PORT=8000
MONGODB_URI=
CORS_ORIGIN = *
ACCESS_TOKEN_SECRET=
ACCESS_TOKEN_EXPIRY=
REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=
CLOUDINARY_CLOUD_NAME =
CLOUDINARY_API_KEY =
CLOUDINARY_API_SECRET =
```

## Running the Application

1. Start the Node.js server:

```
npm start
```

2. The server will run on http://localhost:5000. or http://localhost:8000

## API Endpoints

- Register User
- URL: /api/users/register
- Method: POST
- Description: Registers a new user and uploads avatar and cover photo.
  Payload:

```
{
  "fullname":"string",
  "username": "string",
  "email": "string",
  "password": "string",
  "avatar": "file",
  "coverPhoto": "file" (optinal)
}
```

- Response:

```
{
  "data": {
    "id": "string",
    "fullname":"string"
    "email": "string",
    "username": "string",
    "avatarUrl": "string",
    "coverPhotoUrl": "string"
  }
  "message": "User registered successfully",
  "success":true
}
```

## Login User

- URL: /api/users/login
- Method: POST
- Description: Logs in an existing user.
- Payload

```
{
 "email": "string", or "username":"string",
 "password": "string"
}
```

- Response

```
{
  "data":"User logged in successfully",
  "message": "success",
  "success": true
}
```

## Logout User

- URL: /api/users/logout
- Method: POST
- Description: Logs out the authenticated user.
- Headers: Authorization: Bearer <token>
- Response

```
{
  "data":"User logged out successfully",
  "message": "success",
  "success": true
}
```
## License
This project is licensed under the MIT License - see the LICENSE file for details.
