import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success)
      return NextResponse.json(
        {
          error: "Invalid enquiry",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    const endpoint = process.env.FORMSPREE_ENDPOINT;
    if (endpoint) {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(parsed.data),
      });
      if (!response.ok)
        return NextResponse.json(
          { error: "Delivery provider rejected the enquiry" },
          { status: 502 },
        );
    } else if (process.env.NODE_ENV !== "production")
      console.info("[contact:development] Valid enquiry received", {
        company: parsed.data.company,
        projectType: parsed.data.projectType,
        machines: parsed.data.machines,
        protocol: parsed.data.protocol,
      });
    else
      return NextResponse.json(
        { error: "Contact delivery is not configured" },
        { status: 503 },
      );
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
