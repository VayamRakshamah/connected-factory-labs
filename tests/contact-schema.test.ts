import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/contact-schema";

const valid = {
  name: "Asha Rao",
  company: "Acme Machines",
  email: "asha@example.com",
  phone: "",
  projectType: "Machine monitoring pilot",
  machines: 2,
  protocol: "OPC UA",
  message: "We need remote status and alarm visibility for two machines.",
  consent: true,
};

describe("contactSchema", () => {
  it("accepts a complete enquiry", () =>
    expect(contactSchema.safeParse(valid).success).toBe(true));
  it("rejects invalid email, machine count, short messages, and missing consent", () => {
    const result = contactSchema.safeParse({
      ...valid,
      email: "bad",
      machines: 0,
      message: "too short",
      consent: false,
    });
    expect(result.success).toBe(false);
    if (!result.success)
      expect(result.error.flatten().fieldErrors).toMatchObject({
        email: expect.any(Array),
        machines: expect.any(Array),
        message: expect.any(Array),
        consent: expect.any(Array),
      });
  });
});
