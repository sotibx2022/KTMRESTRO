import { User } from "@/app/models/user.models";
import { NextResponse } from "next/server";

export async function GET(request, response){
return NextResponse.json({name:"Binaya"})
}

export async function POST(request, response){
const{username, age} = await request.json();
try{
const newUser = new User({
    username,
    age,
})
let savedUser = await newUser.save()
return NextResponse.json({message:"New User Saved Successfully"},{status:200})
}
catch(error){
return NextResponse.json({message:"There is some problem to save the user"},{
    status:404
})
}

}