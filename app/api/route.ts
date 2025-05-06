import dbConnection from "@/lib/dbConnection";
import { NextRequest } from "next/server";

export async function POST(req:NextRequest) {
    await dbConnection()
    const { name, email, message }:any = await req.json()
    // const data = await 
    
}