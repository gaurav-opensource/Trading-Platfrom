# 📈 Trading Platform

## 📝 Project Overview

This trading platform provides a user-friendly interface for buying and selling stocks, tracking market trends, and managing portfolios. Built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js), it ensures seamless performance and scalability.

The platform also features secure user authentication, real-time data updates, and analytics for informed decision-making.

---

## 🚀 Features

### 🔐 User Authentication
- **Sign Up and Login**: Users can create accounts and log in securely.
- **JWT-Based Authentication**: Ensures secure session management.
- **Password Encryption**: User passwords are hashed using bcrypt for enhanced security.

### 💼 Trading Functionality
- **Stock Search**: Search for stocks by ticker symbol.
- **Buy and Sell**: Execute trades directly from the platform.
- **Portfolio Management**: Track owned stocks and overall portfolio performance.

### 🔄 Real-Time Updates
- **Live Stock Prices**: Fetch and display real-time market data.
- **Notifications**: Get alerts for stock price changes or executed trades.

### 📊 Dashboard
- **Market Overview**: Visualize trends with charts and graphs.
- **Portfolio Analytics**: View performance metrics such as ROI and net gains.

---

## 🧱 Technology Stack

### Backend
- **Node.js**: Server-side runtime.
- **Express.js**: Backend framework for routing and middleware.
- **MongoDB**: Database for storing user data, trades, and portfolios.
- **JWT**: Secure authentication and authorization.

### Frontend
- **React.js**: Dynamic user interface.
- **Material-UI**: For responsive and visually appealing design.
- **Axios**: For handling HTTP requests.

---

## ⚙️ Installation and Setup

### ✅ Prerequisites
- Node.js (v16+)
- MongoDB (Local or Atlas)
- npm or yarn

### 📥 Clone the Repository

```bash
git clone https://github.com/gaurav-opensource/trading-platform.git
cd trading-platform
```

### 🔧 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file and configure environment variables:

```env
MONGO_URL=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
PORT=5000
```

Start the server:

```bash
npm start
```

### 💻 Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

### 🌐 Access the Application

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend: [http://localhost:5000](http://localhost:5000)

---

## 📡 API Endpoints

### 🔐 Auth Endpoints

| Method | Endpoint        | Description         |
|--------|------------------|---------------------|
| POST   | /api/register    | Register a new user |
| POST   | /api/login       | Login a user        |

### 💼 Trading Endpoints

| Method | Endpoint     | Description              |
|--------|--------------|--------------------------|
| GET    | /api/stocks  | Fetch available stocks   |
| POST   | /api/trade   | Execute a buy/sell trade |

### 📁 Portfolio Endpoints

| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| GET    | /api/portfolio   | View user’s portfolio data|

---

## 📁 Folder Structure

```
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
```

---

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

## 🙋‍♂️ Author

**Gaurav Yadav**  
[LinkedIn](https://www.linkedin.com)  
[GitHub](https://github.com/gaurav-opensource)
