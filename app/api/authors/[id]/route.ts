import dbConnect from "@/lib/mongo";
import Author from "@/models/Author";
import { NextRequest, NextResponse } from "next/server";

const connection = dbConnect()
export async function GET(request: NextRequest, {params}: {params: {id: string}}){
    const {id} = params
    await connection

    try{
        if (!/^[0-9a-fA-F]{24}$/.test(id)){
            return NextResponse.json({message: "Invalid ID format"}, {status: 400})
        }

        const author = await Author.findById(id);

        if (!author){
            return NextResponse.json({message: "Author not found!"}, {status: 404})
        }

        return NextResponse.json({message: "Author retrieved successfully!", data: author}, {status: 200})
    } catch(error: unknown){
        const errorMessage = (error instanceof Error) ? error.message : "Unknown error!"
        return NextResponse.json({message: "Failed to retrieve the error", error: errorMessage}, {status: 500})
    }
}