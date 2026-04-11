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

    // Google Apps Script usually prefers redirect following
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify({ name, email, brief }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json({ error: 'Failed to submit to Google Sheets' }, { status: response.status });
    }
  } catch (err) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
