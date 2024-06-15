import mongoose, { Schema } from "mongoose"

const restaurantSchema = new Schema({
    
    email:String,
    password:String,
   restaurantName:String,
   city:String,
   fullAddress:String,
   contactNumber:Number,
})
export const Restaurant = mongoose.models.Restaurant|| mongoose.model("Restaurant", restaurantSchema)