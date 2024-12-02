import { NextResponse, NextRequest } from "next/server"
import dbConnect from "@/lib/mongo";
import Author from "@/models/Author";

const connection = dbConnect();

export async function GET() {
    await connection
    
    try{
        const authors = await Author.find();
        return NextResponse.json({message: "Authors retrieved successfully!", data: authors}, {status: 200})
    } catch(error: unknown){
        const errorMessage = (error instanceof Error) ? error.message :"Unknown error!"
        return NextResponse.json({message:"Failed to fetch authors", error: errorMessage}, {status: 500})
    }
}

export async function POST(request: NextRequest){
    await connection

    try{
        const body = await request.json()

        const requiredFields = ["name", "username", "email"]
        for (const field of requiredFields){
            if (!body[field]){
                return NextResponse.json({message: `Field ${field} is required!`}, {status:400})
            }
        }

        const { name, username, email, image, url, bio } = body;

        const author = await Author.create({ name, username, email, image, url, bio})

        return NextResponse.json(
            {message: "Author added successfully!", data: author},
            {status: 201}
        )
    } catch(error: unknown){
        const errorMessage = ( error instanceof Error ) ? error.message : "Unknown error!"
        return NextResponse.json({messsage: "Failed to add the author!", error: errorMessage}, {status: 500})
    }
}