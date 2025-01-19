if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const Holding = require("./models/HoldingSchema");
const Position = require("./models/positionSchema");
const Order = require("./models/orderSchema");

// SignUp & Login controller
const { Signup, Login } = require("./controllers/AuthContoller");

const bodyParser = require("body-parser");

//Middleware
const { userVerification } = require("./Middlewares/AuthMiddleware");

let dbUrl = process.env.MONGO_URL;
let PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// Allowed Origins
app.use(
  cors({
    origin: ["http://localhost:3001", "http://localhost:3002"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Root Working!");
});

app.get("/holdings", async (req, res) => {
  let allHoldings = await Holding.find({});
  res.json(allHoldings);
});

app.get("/positions", async (req, res) => {
  let allPositions = await Position.find({});
  res.json(allPositions);
});

// Uploading orders
app.post("/orders", async (req, res) => {
  const newOrder = new Order({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder
    .save()
    .then(() => res.status(201).send("Order saved successfully"))
    .catch((err) => res.status(500).send("Failed to save order: " + err));
});

// Receiving Data
app.get("/orders", async (req, res) => {
  let allOrder = await Order.find({});
  res.json(allOrder);
});

// SignUp & Login Routes
app.post("/signup", Signup);
app.post("/login", Login);

// Verify User Route
app.post("/verify", userVerification, (req, res) => {
  res.json({ status: true, user: req.user.username });
});

async function main() {
  await mongoose.connect(dbUrl);
}

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message:
      process.env.NODE_ENV === "production"
        ? "Internal Server Error"
        : err.message,
  });
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
