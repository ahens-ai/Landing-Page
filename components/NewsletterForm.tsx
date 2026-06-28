"use client";

import { FormEvent, useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("loading");
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!response.ok) throw new Error("Unable to join");
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
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Work email"
        required
        disabled={state === "loading"}
      />
      <button className="button button-light" type="submit" disabled={state === "loading"}>
        {state === "loading" ? "Joining…" : "Join the signal"} <span aria-hidden="true">↗</span>
      </button>
      <p className={`form-status ${state}`} aria-live="polite">
        {state === "success" && "You’re on the list. This demo does not store submissions yet."}
        {state === "error" && "Something went wrong. Please try again."}
      </p>
    </form>
  );
}
