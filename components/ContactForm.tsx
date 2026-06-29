"use client";

import { FormEvent, useState } from "react";

export function ContactForm({ contactEmail }: { contactEmail: string }) {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    const form = event.currentTarget;
    const payload = new FormData(form);
    const name = String(payload.get("name") ?? "").trim();
    const email = String(payload.get("email") ?? "").trim();
    const company = String(payload.get("company") ?? "").trim();
    const message = String(payload.get("message") ?? "").trim();
    const subject = encodeURIComponent(`ahens.ai enquiry from ${name}`.trim());
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : "",
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    );

    try {
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      setState("success");
      form.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>Name<input name="name" autoComplete="name" placeholder="Your name" required /></label>
      <label>Work email<input name="email" type="email" inputMode="email" autoComplete="email" placeholder="you@company.com" required /></label>
      <label>Company<input name="company" autoComplete="organization" placeholder="Company name" /></label>
      <label>What are you exploring?<textarea name="message" placeholder="A short note about the operational challenge or system you are thinking about." rows={5} /></label>
      <div className="form-submit-row">
        <button className="button button-primary" type="submit" disabled={state === "loading"}>{state === "loading" ? "Preparing..." : "Talk to ahens"} <span aria-hidden="true">↗</span></button>
        <p className={`form-status ${state}`} aria-live="polite">
          {state === "success" && `Opening your email client. If nothing opens, email ${contactEmail}.`}
          {state === "error" && `We could not prepare that email. Please write to ${contactEmail}.`}
        </p>
      </div>
    </form>
  );
}
