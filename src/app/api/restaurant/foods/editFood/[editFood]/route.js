import { Food } from "@/app/models/foods.models";
import { NextResponse } from "next/server";

export async function GET(request,context){
    const result = context;
    const editId = context.params.editFood;
    const editableFood = await Food.findOne({_id:editId})
    return NextResponse.json({editableFood})
}
export async function PUT(responce, context){
    const payload = await responce.json();
    const editId = context.params.editFood;
    const{foodName,foodPrice,foodImage,foodDescription} = payload;
    const updatedFood = await Food.findOneAndUpdate({_id:editId},{foodName,foodPrice,foodImage,foodDescription})
    return NextResponse.json({name:"binaya",updatedFood,payload})
}




