Trading Platform

Project Overview

This trading platform provides a user-friendly interface for buying and selling stocks, tracking market trends
, and managing portfolios. Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), it ensures seamless performance and scalability.
The platform also features secure user authentication, real-time data updates, and analytics for informed decision-making.

Features

User Authentication

Sign Up and Login: Users can create accounts and log in securely.
JWT-Based Authentication: Ensures secure session management.
Password Encryption: User passwords are hashed using bcrypt for enhanced security.
Trading Functionalit


Trading Functionality

Stock Search: Search for stocks by ticker symbol.

Buy and Sell: Execute trades directly from the platform.

Portfolio Management: Track owned stocks and overall portfolio performance.

Real-Time Updates

Live Stock Prices: Fetch and display real-time market data.

Notifications: Get alerts for stock price changes or executed trades.

Dashboard

Market Overview: Visualize trends with charts and graphs.

Portfolio Analytics: View performance metrics such as ROI and net gains.

Technology Stack

Backend

Node.js: Server-side runtime.

Express.js: Backend framework for routing and middleware.

MongoDB: Database for storing user data, trades, and portfolios.

JWT: Secure authentication and authorization.

Frontend

React.js: Dynamic user interface.

Material-UI: For responsive and visually appealing design.

Axios: For handling HTTP requests.

Installation and Setup

Prerequisites

Node.js (v16+)

MongoDB (Local or Atlas)

npm or yarn

Clone the Repository

$ git clone https://github.com/gaurav-opensource/trading-platform.git
$ cd trading-platform

Backend Setup

Navigate to the backend directory:

$ cd backend

Install dependencies:

$ npm install

Create a .env file and configure environment variables:

MONGO_URL=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
PORT=5000

Start the server:

$ npm start

Frontend Setup

Navigate to the frontend directory:

$ cd frontend

Install dependencies:

$ npm install

Start the React development server:

$ npm start

Access the Application

The application will be available at http://localhost:3000 for the frontend and http://localhost:5000 for the backend.

API Endpoints

Auth Endpoints

Method

Endpoint

Description

POST

/api/register

Register a new user

POST

/api/login

Login a user

Trading Endpoints

Method

Endpoint

Description

GET

/api/stocks



Execute a buy/sell trade

Portfolio Endpoints

Method

Endpoint

Description


View user’s portfolio data

Folder Structure

/trading-platform
  /backend
    /controllers
    /models
    /routes
    server.js
  /frontend
    /src
      /components
      /pages
      App.js

License

This project is licensed under the MIT License. See the LICENSE file for more details.

Author

Gaurav Yadav

LinkedIn

GitHub

