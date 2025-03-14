// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
// IMPORTS FROM OTHER FILES =
const authRouter = require("./routes/auth");

// INIT
const PORT = 3000;
const app = express();
const DB =
  "mongodb://jawad:jawad123@cluster0-shard-00-00.qlhih.mongodb.net:27017,cluster0-shard-00-01.qlhih.mongodb.net:27017,cluster0-shard-00-02.qlhih.mongodb.net:27017/?ssl=true&replicaSet=atlas-2am48c-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0";

// middleware
app.use(express.json());
app.use(authRouter);

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => {
  console.log(`connected at port ${PORT}`);
});
