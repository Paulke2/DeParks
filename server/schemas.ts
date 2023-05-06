import mongoose, { InferSchemaType, model } from "mongoose";

const plantSchema = new mongoose.Schema({
    name:String,
    description:String,
    QR:String,
    imageURL:String,
    visits:Number
  });
  
  //models
  type plant = InferSchemaType<typeof plantSchema>;
  plantSchema.methods.findAllPLants = function(cb: mongoose.ProjectionType<any> | null | undefined) {
    return mongoose.model('plant').find({ type: this.type }, cb);
  };
  export default model<plant>("plant",plantSchema);