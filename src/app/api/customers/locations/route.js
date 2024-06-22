import { connectToDb } from "@/app/DB/configuration";
import { Restaurant } from "@/app/models/restaurant.models";
import { NextResponse } from "next/server";

    export async function GET(response,context){
        await connectToDb();
    
        const allRestaurants = await Restaurant.find();
    const cities = allRestaurants.map(restaurant=>restaurant.city)
    .filter(city=>city && city.trim() !=="" && city !==null && city.length > 3)
    let uniqueCities=[];
    let duplicateCities = [];
   let lowerCaseCities = cities.map((city=>city.charAt(0).toUpperCase()+ city.slice(1).toLowerCase()));
   for(const city of lowerCaseCities){
    if(uniqueCities.includes(city)){
        duplicateCities.push(city)
    }else{
        uniqueCities.push(city)
    }
   }
        
        return NextResponse.json({message:"Locations Found SuccessFully",uniqueCities, status:200, success:true})
    }