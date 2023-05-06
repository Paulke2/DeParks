import "dotenv/config";
import plantSchema from "./schemas"
import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 5000;

// run npm start
app.get("/", async  (req, res) => {
  //this is async bc this gets a plant and we do not want the site to wait on DB to get a plant
 try {
    throw Error("errorrrr");
 } catch (error) {
  console.error(error);
  let errorMessage = "An unknown error occured";
  if(error instanceof Error){
    errorMessage=error.message;
  }
  res.status(500).json({ error: errorMessage});
 }
  const plants = await plantSchema.find().exec();
  //200 stands for okay
  res.status(200).json(plants);
});

mongoose.connect(process.env.DATABASE_URL!)
.then(() => {
  console.log("Mogoose connected");
  app.listen(PORT, () => {
    console.log(`Server is running on port: ` + PORT);
  });
})
.catch(console.error)
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.on("error", (error) => console.error(error));
// start the Express server


