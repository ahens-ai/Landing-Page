"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm({ contactEmail }: { contactEmail: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    const subject = encodeURIComponent("ahens.ai newsletter request");
    const body = encodeURIComponent(`Please add this email to the ahens signal list:\n\n${email}`);

    try {
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      setState("success");
      setEmail("");
    } catch {
      setState("error");
    }
  }

  return (
    <form className="newsletter-form" onSubmit={onSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        inputMode="email"
        autoComplete="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Work email"
        required
        disabled={state === "loading"}
      />
      <button className="button button-light" type="submit" disabled={state === "loading"}>
        {state === "loading" ? "Preparing..." : "Join the signal"} <span aria-hidden="true">↗</span>
      </button>
      <p className={`form-status ${state}`} aria-live="polite">
        {state === "success" && `Opening your email client. If nothing opens, email ${contactEmail}.`}
        {state === "error" && `Something went wrong. Please write to ${contactEmail}.`}
      </p>
    </form>
  );
}
