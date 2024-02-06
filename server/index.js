const express = require("express");
require("dotenv").config();
const cors = require('cors')

const port = 5000;
const app = express();
const connectDB = require("./db/connectDB");
const questionsRoutes = require("./routes/questionRoute");

app.use(express.json());
app.use(cors())

app.use("/questions", questionsRoutes);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening to ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
