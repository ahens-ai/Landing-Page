"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Unable to send");
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
        <button className="button button-primary" type="submit" disabled={state === "loading"}>{state === "loading" ? "Sending…" : "Send enquiry"} <span aria-hidden="true">↗</span></button>
        <p className={`form-status ${state}`} aria-live="polite">
          {state === "success" && "Received. This starter uses a placeholder endpoint—connect it to your CRM or email service next."}
          {state === "error" && "We could not send that. Please try again."}
        </p>
      </div>
    </form>
  );
}
