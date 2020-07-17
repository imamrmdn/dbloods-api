if (process.env.NODE_ENV !== "production") {
  // @ts-ignore
  require("dotenv").config();
}

// @ts-ignore
const express = require("express");
const app = express();
// @ts-ignore
const expressLayouts = require("express-ejs-layouts");

const indexRouter = require("./routes/index.js");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

const mongoose = require("mongoose");
// @ts-ignore
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", (error) => console.log("connected to mongoose"));

app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);
