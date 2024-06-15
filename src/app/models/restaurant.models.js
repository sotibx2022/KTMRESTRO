import mongoose, { Schema } from "mongoose"

const restaurantSchema = new Schema({
    name:String,
    email:String,
    password:String,
})
export const Restaurant = mongoose.models.Restaurant|| mongoose.model("Restaurant", restaurantSchema)