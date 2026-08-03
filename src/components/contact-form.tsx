"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { consent: false },
  });
  const submit = async (data: ContactInput) => {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Unable to send enquiry");
    setSent(true);
    reset();
  };
  if (sent)
    return (
      <div className="form-success" role="status">
        <h2>Thanks — your enquiry is recorded.</h2>
        <p>
          We’ll review the machine and project context you shared and reply
          using your contact details.
        </p>
        <button className="button secondary" onClick={() => setSent(false)}>
          Send another enquiry
        </button>
      </div>
    );
  const field = (name: keyof ContactInput, label: string, type = "text") => (
    <label>
      {label}
      <input type={type} {...register(name)} aria-invalid={!!errors[name]} />
      {errors[name] && <span className="error">{errors[name]?.message}</span>}
    </label>
  );
  return (
    <form className="contact-form" onSubmit={handleSubmit(submit)} noValidate>
      <div className="form-row">
        {field("name", "Your name")}
        {field("company", "Company")}
      </div>
      <div className="form-row">
        {field("email", "Work email", "email")}
        {field("phone", "Phone (optional)", "tel")}
      </div>
      <div className="form-row">
        <label>
          Project type
          <select {...register("projectType")} defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Machine monitoring pilot</option>
            <option>Production and downtime</option>
            <option>Energy monitoring</option>
            <option>OEM portal</option>
            <option>Cloud / integration support</option>
          </select>
          {errors.projectType && (
            <span className="error">{errors.projectType.message}</span>
          )}
        </label>
        {field("machines", "Number of machines", "number")}
      </div>
      <label>
        Known protocol
        <select {...register("protocol")} defaultValue="">
          <option value="" disabled>
            Select one
          </option>
          <option>Modbus TCP</option>
          <option>Modbus RTU</option>
          <option>OPC UA</option>
          <option>MQTT</option>
          <option>Not sure</option>
          <option>Other</option>
        </select>
        {errors.protocol && (
          <span className="error">{errors.protocol.message}</span>
        )}
      </label>
      <label>
        What do you need to see or improve?
        <textarea rows={6} {...register("message")} />
        {errors.message && (
          <span className="error">{errors.message.message}</span>
        )}
      </label>
      <label className="check">
        <input type="checkbox" {...register("consent")} />
        <span>I consent to being contacted about this enquiry.</span>
      </label>
      {errors.consent && (
        <span className="error">{errors.consent.message}</span>
      )}
      <button className="button primary" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send project enquiry"}
      </button>
    </form>
  );
}
