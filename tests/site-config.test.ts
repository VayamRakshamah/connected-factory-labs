import { describe, expect, it } from "vitest";
import { siteConfig } from "@/config/site";

describe("siteConfig", () => {
  it("provides every centrally managed site value", () => {
    expect(Object.keys(siteConfig)).toEqual(
      expect.arrayContaining([
        "companyName",
        "shortName",
        "tagline",
        "description",
        "founderName",
        "email",
        "phone",
        "whatsapp",
        "address",
        "domain",
        "linkedInUrl",
        "githubUrl",
        "demoUrl",
        "bookingUrl",
      ]),
    );
    expect(siteConfig.companyName).toBe("Connected Factory Labs");
  });
});
