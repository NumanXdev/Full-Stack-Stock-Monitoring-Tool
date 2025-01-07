require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("All good!");
});

let  dbUrl  = process.env.MONGO_URL;
let PORT=process.env.PORT;

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

app.listen(PORT, () => {
  console.log("App is listening at 3000");
});
