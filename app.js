const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const router = require("./routes/PostRoutes");

//constants
const port = process.env.PORT || 4000;
const DB = process.env.MONGO_URI;

//server initialization
const app = express();

//middlewares
app.use(cors());
app.use(express.json({ extended: true, limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));

//routes
app.use("/api", router);
app.use("/api/:id", router);

//server and db connections

app.listen(port, () => console.log(`server running on port: ${port}`));

mongoose.connect(
  DB,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  () => console.log("connection to mongo DB was successful!!!")
);
