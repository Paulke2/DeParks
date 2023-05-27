const express = require("express");

//const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cors());
const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
});
db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.on('open', () => console.log('connected to DB'));
app.listen(3000,()=> console.log('Server started'));
