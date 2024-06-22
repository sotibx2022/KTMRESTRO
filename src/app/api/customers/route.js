import { connectToDb } from "@/app/DB/configuration";
import { Restaurant } from "@/app/models/restaurant.models";
import { NextResponse } from "next/server";

// This route is to handle search requests by customers
export async function GET(response, context) {
    await connectToDb();

    // Extract query parameters from the URL
    let queryParams = new URLSearchParams(response.url.split('?')[1]);

    // Initialize filter object based on query parameters
    let filter = {};

    // Retrieve and handle 'name', 'location', or 'restaurant' parameters
    if (queryParams.has('name')) {
        let name = queryParams.get('name');
        filter = { ...filter, restaurantName: { $regex: name, $options: 'i' } }; // Case-insensitive search for name
    }

    if (queryParams.has('location')) {
        let city = queryParams.get('location');
        filter = { ...filter, city };
    }

    if (queryParams.has('restaurant')) {
        let restaurantName = queryParams.get('restaurant');
        filter = { ...filter, restaurantName };
    }

    // Perform database query using the constructed filter
    const result = await Restaurant.find(filter);

    // Return JSON response with search results
    return NextResponse.json(result);
}
