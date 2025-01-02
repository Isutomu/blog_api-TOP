require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const routes = require("./routes");

const app = express();

const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200,
};

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(
  process.env.PORT,
  () => `server initialized in port ${process.env.PORT}`
);
