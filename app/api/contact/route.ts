import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, brief } = body;

    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

    // We do a mock return for development since the user will set the env variable later
    if (!GOOGLE_SCRIPT_URL) {
      console.warn("No GOOGLE_SCRIPT_URL found. Simulating successful submission.");
      return NextResponse.json({ success: true, simulated: true }, { status: 200 });
    }

    // Google Apps Script requires specific headers and redirect following for server-side fetches
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({ name, email, brief }),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      redirect: "follow",
    });

    if (response.ok) {
      const data = await response.json();
      
      if (data.result === "success") {
        return NextResponse.json({ success: true }, { status: 200 });
      } else {
        console.error("Google Script Internal Error:", data.error);
        return NextResponse.json({ error: 'Google Script Failed internally', details: data.error }, { status: 400 });
      }
    } else {
      const errorText = await response.text();
      console.error("Google Script HTTP Error Details:", errorText);
      return NextResponse.json({ error: 'Failed to submit to Google Sheets', details: errorText }, { status: response.status });
    }
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
