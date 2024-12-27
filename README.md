# Weather App

A simple Weather App project with separate backend and frontend. Follow the steps below to set up and run the application.

## Prerequisites

- Node.js installed on your system
- MongoDB installed and running
- A code editor like VS Code

---

## Setup and Run Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/SelimRejabd/Weather-App
cd Weather-App

2. Backend Setup

    Navigate to the backend folder:

cd backend

Install dependencies:

npm install

Build the backend:

npm run build

Start the backend server:

    npm start

The backend server will start running. Keep this terminal open.
3. Frontend Setup

    Open a new terminal and navigate to the frontend folder:

cd Weather-App/frontend

Install dependencies:

npm install

Start the development server:

npm run dev

```
```bash

API Endpoints

1. User Creation (POST):

URL: http://localhost:5000/api/v1/users/create

Body (raw JSON):

{
  "name": "your_name",
  "email": "your_email@example.com",
  "password": "your_password"
}
Response:

{
  "success": true,
  "message": "User created successfully.",
  "data": {
    "name": "created_user_name",
    "email": "created_user_email",
    "_id": "user_id",
    "__v": 0
  }
}
2. Login User (GET):

URL: http://localhost:5000/api/v1/users/login

Body (raw JSON):



{
  "email": "your_email@example.com",
  "password": "your_password"
}
Response:



{
  "message": "Login successful",
  "success": true,
  "userData": {
    "name": "user_name",
    "email": "user_email",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."  // JWT token for authorized access
  }
}
3. Get Weather with Authorization (GET):

URL: http://localhost:5000/api/v1/weather/temperature

Headers:

Authorization: Bearer <JWT token obtained from login>
Response:



{
  "success": true,
  "message": "Temperature data retrive successfully.",
  "data": {
    "temperature": "22.04",
    "unit": "Celsius",
    "timestamp": "2024-12-27T13:42:54.043Z"
  }
}
4. Get Weather without Authorization (GET):

URL: http://localhost:5000/api/v1/weather/temperature

This endpoint might return public weather data (depending on your implementation).

Response:



{
  "success": true,
  "message": "Temperature data retrive successfully.",
  "data": {
    "temperature": "42.97",
    "unit": "Celsius",
    "timestamp": "2024-12-27T13:44:07.519Z"
  }
}

```