import mongoose, { Schema } from "mongoose"


const foodSchema = new Schema({
    foodName:String,
    foodImage:String,
    foodPrice:Number,
    foodDescription:String,
    Restro_Id:String,

})
export const Food = mongoose.models.Food || mongoose.model("Food",foodSchema);