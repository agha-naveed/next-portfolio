import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Your logic here...
  const data = { message: "Vercel API is live and connected!" };

  // 🚀 The Magic Fix: Return the response with CORS headers attached
  return NextResponse.json(data, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Allows your Electron app to connect
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

// 🚀 CRITICAL for Electron: You must also handle the preflight OPTIONS request
export async function OPTIONS(request: Request) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}