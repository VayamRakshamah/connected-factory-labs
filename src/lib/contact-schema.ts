import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name"),
  company: z.string().trim().min(2, "Enter your company"),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().optional(),
  projectType: z.string().min(1, "Select a project type"),
  machines: z.coerce
    .number()
    .int()
    .positive("Enter at least one machine")
    .max(10000),
  protocol: z.string().min(1, "Select a protocol"),
  message: z
    .string()
    .trim()
    .min(20, "Tell us a little more (at least 20 characters)"),
  consent: z.boolean().refine((value) => value, "Consent is required"),
});

export type ContactInput = z.infer<typeof contactSchema>;
