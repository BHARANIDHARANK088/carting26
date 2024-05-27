const express = require("express");
const app = express();
app.use(express.json());
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

// 22
const cors = require("cors");
app.use(cors());

const authRoutes = require("./routes/authRoute.js");
const userRoutes = require("./routes/userRoute.js");
const productRoutes = require("./routes/productRoute.js");
const cartRoutes = require("./routes/cartRoute.js");
const orderRoutes = require("./routes/orderRoute.js");

mongoose.connect("mongodb://localhost:27017/rCartingDB", {
     useNewUrlParser: true, 
     useUnifiedTopology: true
}).then(console.log("Connected to Database"))
.catch(error => console.log(error));


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);

// app.use("/api/checkout", stripeRoute);

app.listen(5000, () => {
    console.log("Server started");
})