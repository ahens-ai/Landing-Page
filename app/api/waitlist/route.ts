import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ ok: false, message: "Enter a valid email" }, { status: 400 });
  }
  // TODO: Connect to your newsletter provider and add rate limiting + bot protection.
  return NextResponse.json({ ok: true, message: "Placeholder waitlist endpoint accepted the request." });
}
