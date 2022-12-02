const express = require("express");
const dotenv = require("dotenv");
var cors = require("cors");
const mongoose = require("mongoose");
const port = 3002;
dotenv.config();

const sliderRoutes = require("./routes/sliderRoutes.js");
const categoryRoutes = require("./routes/categoryRoutes.js");
const arrivalRoutes = require("./routes/arrivalRoutes.js");
const postRoutes = require("./routes/postRoutes");
const instagramRoutes = require("./routes/instagramRoutes.js");
const logoRoutes = require("./routes/logoRoutes.js");
const settingRoutes = require("./routes/settingRoutes.js");
const expertRoutes = require("./routes/expertsRoutes.js");
const quoteRoutes = require("./routes/quoteRoutes.js");
const contactRoutes = require("./routes/contactRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/slider", sliderRoutes);
app.use("/category", categoryRoutes);
app.use("/arrivals", arrivalRoutes);
app.use("/post", postRoutes);
app.use("/instagram", instagramRoutes);
app.use("/logo", logoRoutes);
app.use("/setting", settingRoutes);
app.use("/experts", expertRoutes);
app.use("/quotes", quoteRoutes);
app.use("/contact", contactRoutes);

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => console.log("Connect Database...!"))
  .then(() => {
    app.listen(port);
  })
  .catch((err) => console.log(err));
