import { connectToDb } from "@/app/DB/configuration";
import { Food } from "@/app/models/foods.models";
import { Restaurant } from "@/app/models/restaurant.models";
import { NextResponse } from "next/server";

export async function GET(request, context){
    await connectToDb();
    const restaurantId = context.params.restaurantId;
    const restaurantDetail = await Restaurant.findOne({_id:restaurantId});
    const restaurnatFoods = await Food.find({Restro_Id:restaurantId})
    return NextResponse.json({success:true,restaurantId,restaurantDetail,restaurnatFoods})
}