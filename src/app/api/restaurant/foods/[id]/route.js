

import { NextResponse } from 'next/server'; // Assuming you are using Next.js
import { connectToDb } from '@/app/DB/configuration';
import { Food } from '@/app/models/foods.models';

export async function GET(request, context) {
    try {
        await connectToDb(); // Ensure this returns a promise and resolves when the connection is established

        const id = context.params.id; // 'content' should be 'context'
        
        const allFoodItems = await Food.find({Restro_Id: id});
        
        return NextResponse.json({ message: "Food Items Found Successfully", allFoodItems, success:true,status:200 });
    } catch (error) {
        console.error("Error fetching food items:", error);
        return NextResponse.json({ error: "Failed to fetch food items" }, { status: 500 });
    }
}
export async function DELETE(request, content){
    try {
        await connectToDb();
        const idToDelete = content.params.id;
        console.log(idToDelete);
        const result = await Food.deleteOne({_id:idToDelete});
        if(result){
            return NextResponse.json({message:"Food Item Deleted Successfully",status:200, success:true})
        }
        return NextResponse.json({message:"There is nothing to delete", status:204, success:false})
    } catch (error) {
        return NextResponse.json({message:"Nothing Found to delete", status:500, success:false})
    }
}
