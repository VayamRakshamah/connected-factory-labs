"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState("");
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
    setServerError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Unable to send enquiry");
      setSent(true);
      reset();
    } catch {
      setServerError(
        "We could not send this enquiry just now. Please email us directly instead.",
      );
    }
  };

  if (sent)
    return (
      <div className="form-success" role="status">
        <CheckCircle2 aria-hidden="true" />
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

  const field = (name: keyof ContactInput, label: string, type = "text") => {
    const errorId = `${name}-error`;
    return (
      <label>
        {label}
        <input
          type={type}
          {...register(name)}
          aria-invalid={!!errors[name]}
          aria-describedby={errors[name] ? errorId : undefined}
        />
        {errors[name] && (
          <span className="error" id={errorId}>
            {errors[name]?.message}
          </span>
        )}
      </label>
    );
  };

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
          <select
            {...register("projectType")}
            defaultValue=""
            aria-invalid={!!errors.projectType}
            aria-describedby={
              errors.projectType ? "project-type-error" : undefined
            }
          >
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
            <span className="error" id="project-type-error">
              {errors.projectType.message}
            </span>
          )}
        </label>
        {field("machines", "Number of machines", "number")}
      </div>
      <label>
        Known protocol
        <select
          {...register("protocol")}
          defaultValue=""
          aria-invalid={!!errors.protocol}
          aria-describedby={errors.protocol ? "protocol-error" : undefined}
        >
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
          <span className="error" id="protocol-error">
            {errors.protocol.message}
          </span>
        )}
      </label>
      <label>
        What do you need to see or improve?
        <textarea
          rows={5}
          {...register("message")}
          placeholder="For example: our service team needs to see machine state and recent alarms before travelling to site."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <span className="error" id="message-error">
            {errors.message.message}
          </span>
        )}
      </label>
      <label className="check">
        <input type="checkbox" {...register("consent")} />
        <span>I consent to being contacted about this enquiry.</span>
      </label>
      {errors.consent && (
        <span className="error">{errors.consent.message}</span>
      )}
      {serverError && (
        <p className="form-server-error" role="alert">
          {serverError}
        </p>
      )}
      <button className="button primary" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Send project enquiry"}
        {!isSubmitting && <ArrowRight aria-hidden="true" />}
      </button>
    </form>
  );
}
