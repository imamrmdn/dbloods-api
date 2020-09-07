if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: ".env" });
}

//
const express = require("express");
const bodyparser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const app = express();
//
const expressLayouts = require("express-ejs-layouts");

const indexRouter = require("./routes/index.js");
const eventRouter = require("./routes/event_route");
const informasiRouter = require("./routes/informasi_route");
const stokRouter = require("./routes/stok_route");
const edukasiRouter = require("./routes/edukasi_route");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: false }));

//
const mongoose = require("mongoose");
//
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
app.use("/api", edukasiRouter);

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(process.env.PORT || 3000);
