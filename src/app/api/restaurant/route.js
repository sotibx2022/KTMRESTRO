import { NextResponse } from "next/server";
import { Restaurant } from "../../models/restaurant.models";
import { connectToDb } from "@/app/DB/configuration";
export async function GET(){
    await connectToDb() 
    try {
        
    const allRestaurants = await Restaurant.find()
    return NextResponse.json(allRestaurants);
    } catch (error) {
        return NextResponse.json({name:"Raj"})
    }
   
    
} 

export async function POST(request){
    const{name, email, password} = await request.json();
    await connectToDb();
    let newItem = new Restaurant({
        name,
        email,
        password
    })
    try{
        let savedRestaurant = await newItem.save();
        return NextResponse.json({
            message:"New Restaurant Created"
        },{
            status:200
        })
    }
    catch(error){
        return NextResponse.json({
            message:"Restaurant add Failed."
        },{
            status:404
        })

    }
    
}