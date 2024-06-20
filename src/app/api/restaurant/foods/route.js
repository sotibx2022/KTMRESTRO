import { connectToDb } from "@/app/DB/configuration";
import { Food } from "@/app/models/foods.models";
import { NextResponse } from "next/server";

export async function GET(request){
    return NextResponse.json({message:"api route to post food items"})
}

    export async function POST(response){
        
        try {
            await connectToDb();
            const payload = await response.json();
            const {foodName,foodDescription,foodPrice,foodImage,Restro_Id} = payload;
                const newFood = new Food({
                    foodName,foodDescription,foodPrice,foodImage,Restro_Id
                })
                const savedFood = await newFood.save();
                return NextResponse.json({addedFood:savedFood,success:true,message:"Item Added Successfully",status:200})
        } catch (error) {
            return NextResponse.json({message:"Error to post Data", status:400, success:false,error:error})
        }
    
    }