import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { message, history, courseName, courseFaq } = await req.json();

    // Ensure the API key exists
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Missing Gemini API Key. Please add GEMINI_API_KEY to your .env.local file." },
        { status: 500 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // Construct the prompt with system instructions
    const systemPrompt = `You are an intelligent, friendly AI Course Assistant for an IT institute named 'Urbancode' located in Chennai.
Your goal is to answer user queries specifically about the course: "${courseName || 'IT Training'}".
Do not hallucinate. Use the following course information as your primary source of truth:
${JSON.stringify(courseFaq, null, 2)}

Important Rules:
1. Be concise, professional, and encouraging. Keep answers under 3-4 short sentences.
2. If asked about pricing and it's not in the data, tell them to contact admin@urbancode.in or call +91 9878798797.
3. Format your responses using simple markdown (bolding key terms). Do NOT use complex markdown or tables.
4. If they ask something completely unrelated to IT, programming, or Urbancode, politely decline to answer and guide them back to course topics.`;

    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash-lite",
      systemInstruction: systemPrompt
    });

    // Map history to Gemini format
    const formattedHistory = history.map(msg => ({
      role: msg.type === 'bot' ? 'model' : 'user',
      parts: [{ text: msg.text }]
    }));

    const chat = model.startChat({
      history: formattedHistory,
    });

    const result = await chat.sendMessage(message);
    const responseText = result.response.text();

    return NextResponse.json({ reply: responseText });

  } catch (error) {
    console.error("Gemini API Error:", error?.message || error);

    // Handle quota exceeded gracefully
    if (error?.message?.includes('429') || error?.message?.includes('quota')) {
      return NextResponse.json(
        { reply: `I'm a bit busy right now due to high demand! 🙏 For immediate help about **${(await req.json?.().catch(() => ({})))?.courseName || 'this course'}**, please contact us at **admin@urbancode.in** or call **+91 9878798797**. Our team responds within 1 hour!` },
        { status: 200 } // Return 200 so frontend shows the fallback message
      );
    }

    return NextResponse.json(
      { error: "Failed to fetch response from AI. Please try again later." },
      { status: 500 }
    );
  }
}
