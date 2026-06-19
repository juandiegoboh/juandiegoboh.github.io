"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="od-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Tu nombre" required />
      <input type="email" name="email" placeholder="Correo electrónico" required />
      <input type="tel" name="phone" placeholder="Teléfono (opcional)" />
      <textarea name="message" placeholder="¿En qué podemos ayudarte?" required />
      <button type="submit" className="od-form-btn" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>
      {status === "success" && (
        <p className="od-form-status success">✓ Mensaje enviado. Te contactamos pronto.</p>
      )}
      {status === "error" && (
        <p className="od-form-status error">Ocurrió un error. Intenta de nuevo.</p>
      )}
    </form>
  );
}