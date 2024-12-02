import dbConnect from "@/lib/mongo";
import Startup from "@/models/Startups";
import { NextRequest, NextResponse } from "next/server";

const connection = dbConnect()

export async function GET(){
    await connection;

    try {
        const startups = await Startup.find();
        return NextResponse.json({message: "Startups successfuly retrieved!", data: startups}, {status: 200})
    } catch (error: unknown){
        const errorMessage = (error instanceof Error) ? error.message : "Unknown error!"
        return NextResponse.json({message: "Startups retrieval failed!", error: errorMessage}, {status: 500})
    }
}

export async function POST(request: NextRequest){
    await connection;

    try{
        const body = await request.json()
        const requiredFields = ["title", "description"]
    
        for (const field of requiredFields){
            if (!body[field]){
                return NextResponse.json({message: `Field ${field} is required!`}, {status: 400})
            }
        }
    
        const {title, description, image, category, author} =  body;
    
        const startup = await Startup.create({title, description, image, category, author})
        return NextResponse.json({message: "Startup created successfuly! ", data: startup}, {status: 201})
    } catch( error: unknown){
        const errorMessage =  (error instanceof Error) ? error.message : "Unknown error!"
        return NextResponse.json({message: "Startup could not be created!", error: errorMessage}, {status: 500}) 
    }

}