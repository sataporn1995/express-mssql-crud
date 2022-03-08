const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();
const PORT = 3000;

const apiRouter = require("./routes/api");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", apiRouter);

app.listen(PORT, () => console.log("Server start..."));
