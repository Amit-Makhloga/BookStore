const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const cors = require("cors");

const bookRoute = require("./routes/book_route.js");
const userRoute = require("./routes/user_route.js")

const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const port = process.env.Port || 4000;

const URI = process.env.DATABASE_URL;
//connect to mongodb
try{
    mongoose.connect(URI);
    console.log("Connected to MongoDB Atlas")
} catch (error) {
    console.log("Database connection error:", error)
}

//defining routes
app.use("/book", bookRoute)
app.use("/user", userRoute)

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})