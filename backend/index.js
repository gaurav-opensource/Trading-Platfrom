

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRoutes = require("./Routes/AuthRoute"); // Auth routes
const { HoldingsModel } = require("./model/HoldingsModel"); // Holdings model
const { PositionsModel } = require("./model/PositionsModel"); // Positions model
const { OrdersModel } = require("./model/OrdersModel"); // Orders model

const { MONGO_URL, PORT } = process.env;

const app = express();

// Connect to MongoDB
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());
app.use(bodyParser.json()); // Parse JSON bodies

// Routes
app.use("/api", userRoutes);

// Positions routes
app.get("/addPositions", async (req, res) => {
  let tempPositions = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];

  tempPositions.forEach((item) => {
    let newPosition = new PositionsModel({
      product: item.product,
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
      isLoss: item.isLoss,
    });

    newPosition.save();
  });
  res.send("Done!");
});



app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();
  res.send("Order saved!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
