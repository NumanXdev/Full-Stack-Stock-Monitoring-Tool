//4
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const Holding = require("./models/HoldingSchema");
const Position = require("./models/positionSchema");
const Order = require("./models/orderSchema");

// SignUp & Login controller
const { Signup, Login } = require("./controllers/AuthContoller");

const cors = require("cors");
const bodyParser = require("body-parser");

//Middleware
const { userVerification } = require("./Middlewares/AuthMiddleware");

let dbUrl = process.env.MONGO_URL;
let PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.options("*", cors());

app.use(
  cors({
    origin: [
      process.env.BACKEND_URL,      // Backend
      process.env.FRONTEND_URL,    // Frontend
      process.env.DASHBOARD_URL,   // Dashboard
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.send("Root Working!");
});

// app.get("/holdings", (req, res) => {
//   let tempHolding = [
//     {
//       name: "ICICIBANK",
//       qty: 12,
//       avg: 890.6,
//       price: 905.5,
//       net: "+1.67%",
//       day: "+2.10%",
//     },
//     {
//       name: "ITC",
//       qty: 20,
//       avg: 395.25,
//       price: 399.1,
//       net: "+0.97%",
//       day: "+1.50%",
//     },
//   ];

//   tempHolding.forEach((Item) => {
//     let newHolding = new Holding({
//       name: Item.name,
//       qty: Item.qty,
//       avg: Item.avg,
//       price: Item.price,
//       net: Item.net,
//       day: Item.day,
//     });
//     newHolding.save();
//   });
//   res.send("Data uploaded");
// });

// app.get("/addpositions", async (req, res) => {
//   let positions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];
//   positions.forEach((item) => {
//     console.log("Item being saved:", item);
//     let temPositions = new Position({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     console.log("Saving Position:", temPositions);
//     temPositions.save();
//   });
//   res.send("Data Uploaded")
// });

app.get("/holdings", async (req, res) => {
  let allHoldings = await Holding.find({});
  res.json(allHoldings);
});
app.get("/positions", async (req, res) => {
  let allPositions = await Position.find({});
  res.json(allPositions);
});

//Uploading
app.post("/orders", async (req, res) => {
  // res.send("Working!");
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
  // res.send("Saved")
});

//Receving Data

app.get("/orders", async (req, res) => {
  let allOrder = await Order.find({});
  res.json(allOrder);
});

//Testing login route
/* 
app.get("/login",(req,res)=>{
  res.send("good")
})
*/

//Async call back written in controller
app.post("/signup", Signup);
app.post("/login", Login);
// app.get("/Home", userVerification, (req, res) => {
//   res.send(Home);
// });
//7
// app.post("/dashboard", userVerification);
app.post("/verify", userVerification, (req, res) => {
  res.json({ status: true, user: req.user.username });
});

async function main() {
  await mongoose.connect(dbUrl);
}

main()
  .then((res) => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

//Error Handling MiddleWare
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log("App is listening at 3000");
});
