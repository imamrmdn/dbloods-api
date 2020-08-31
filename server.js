if (process.env.NODE_ENV !== "production") {
  // @ts-ignore
  require("dotenv").config({ path: ".env" });
}

// @ts-ignore
const express = require("express");
const bodyparser = require("body-parser");
const app = express();
// @ts-ignore
const expressLayouts = require("express-ejs-layouts");

const indexRouter = require("./routes/index.js");
const eventRouter = require("./routes/event_route");
const informasiRouter = require("./routes/informasi_route");
const stokRouter = require("./routes/stok_route");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false }));
const mongoose = require("mongoose");
// @ts-ignore
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", (error) => console.log("connected to mongoose"));

//router
app.use("/", indexRouter);
app.use("/api", eventRouter);
app.use("/api", informasiRouter);
app.use("/api", stokRouter);

app.listen(process.env.PORT || 3000);
