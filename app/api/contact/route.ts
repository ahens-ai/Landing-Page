import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body?.email || !body?.message || !body?.firstName || !body?.lastName) {
    return NextResponse.json({ ok: false, message: "Missing required fields" }, { status: 400 });
  }
  // TODO: Replace with Resend / HubSpot / Salesforce / database persistence.
  return NextResponse.json({ ok: true, message: "Placeholder contact endpoint accepted the request." });
}
