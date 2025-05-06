import dbConnection from "@/lib/dbConnection";
import UserMessage from "@/lib/UserMessage";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    await dbConnection()
    const { name, email, message }:any = await req.json()
    const data = await UserMessage.insertOne({
        name, email, message
    })
    if(data) {
        return NextResponse.json({
            message: "ok"
        }, { status: 201 })
    }
    else {
        return NextResponse.json({
            message: "error"
        }, { status: 400 })
    }
}