import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const prompt = body.prompt;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);

    const response = await result.response;

    const text = response.text();

    return NextResponse.json({ text });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
