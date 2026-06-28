"use client";

import { FormEvent, useState } from "react";

export function ContactForm({ contactEmail }: { contactEmail: string }) {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    const form = event.currentTarget;
    const payload = new FormData(form);
    const firstName = String(payload.get("firstName") ?? "").trim();
    const lastName = String(payload.get("lastName") ?? "").trim();
    const email = String(payload.get("email") ?? "").trim();
    const company = String(payload.get("company") ?? "").trim();
    const message = String(payload.get("message") ?? "").trim();
    const subject = encodeURIComponent(`ahens.ai enquiry from ${firstName} ${lastName}`.trim());
    const body = encodeURIComponent(
      [
        `Name: ${firstName} ${lastName}`.trim(),
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
      <div className="form-row">
        <label>First name<input name="firstName" autoComplete="given-name" placeholder="Your first name" required /></label>
        <label>Last name<input name="lastName" autoComplete="family-name" placeholder="Your last name" required /></label>
      </div>
      <div className="form-row">
        <label>Work email<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label>
        <label>Company<input name="company" autoComplete="organization" placeholder="Company name" /></label>
      </div>
      <label>What are you looking to build?<textarea name="message" placeholder="Tell us a little about the operational challenge you are working on." rows={6} required /></label>
      <div className="form-submit-row">
        <button className="button button-primary" type="submit" disabled={state === "loading"}>{state === "loading" ? "Preparing..." : "Send enquiry"} <span aria-hidden="true">↗</span></button>
        <p className={`form-status ${state}`} aria-live="polite">
          {state === "success" && `Opening your email client. If nothing opens, email ${contactEmail}.`}
          {state === "error" && `We could not prepare that email. Please write to ${contactEmail}.`}
        </p>
      </div>
    </form>
  );
}
