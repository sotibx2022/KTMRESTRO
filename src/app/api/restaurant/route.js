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
    await connectToDb();
    try {
        const payload = await request.json();
    if(payload.login){
        const userData = await Restaurant.findOne({email:payload.email})
        return NextResponse.json(userData)
    }
    } catch (error) {
       return NextResponse.json({error:"Something went wrong."}) 
    }
    

    // const{email, password,restaurantName,city,fullAddress,contactNumber} = await request.json();
    // await connectToDb();
    // let newItem = new Restaurant({
    //     email,password,restaurantName,city,fullAddress,contactNumber
    // })
    // try{
    //     let savedRestaurant = await newItem.save();
    //     return NextResponse.json({savedRestaurantData:newItem,message:"Data Stored Successfully",status:200,success:true})
    // }
    // catch(error){
    //     return NextResponse.json({
    //         message:"Restaurant add Failed."
    //     },{
    //         status:404
    //     })

    // }
    
}