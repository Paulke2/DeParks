const express = require("express");
require("dotenv").config({ path: "./.env" });
const app = express();
const plant_routes = require("./routes/plants.js");
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));

//this is a Middleware function(has access to response and request obj. and what to do next)
// async function getPlant(req, res, next) {
//   try {
//     plant = await plan.find(req.params.Plantid);
//     if (plant == null) {
//       return res.status(404).json({ message: "cannot find plant" });
//     }
//   } catch (err) {}
//   res.plant = plant;
//   next();
// }
mongoose.connect(process.env.DATABASE_URL)
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log("Server started");
      });
})
.catch((error)=>{
    console.log(error);
})
//middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//plant routes
app.use("/plants", plant_routes);
