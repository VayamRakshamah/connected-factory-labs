import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { siteConfig } from "@/config/site";
export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms for using the ${siteConfig.companyName} website.`,
};
export default function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        text="Terms governing use of this informational website and its demonstration content."
      />
      <Container className="legal">
        <p>Last updated: 3 August 2026</p>
        <h2>Website purpose</h2>
        <p>
          This website provides general information about potential industrial
          integration and software services. Content is not a binding proposal,
          engineering instruction, or guarantee of a particular outcome.
        </p>
        <h2>Demonstration data</h2>
        <p>
          All readings and alarms shown in the demo are simulated. They must not
          be used to operate, diagnose, or make safety decisions about real
          equipment.
        </p>
        <h2>Intellectual property</h2>
        <p>
          Unless otherwise stated, website content and design belong to{" "}
          {siteConfig.companyName}. You may not misrepresent, republish, or
          commercially exploit them without permission.
        </p>
        <h2>Availability and links</h2>
        <p>
          The website may change or become unavailable. External links are
          provided for convenience and do not imply control or endorsement of
          third-party content.
        </p>
        <h2>Liability</h2>
        <p>
          To the extent permitted by law, {siteConfig.companyName} is not liable
          for losses arising from reliance on this general website content.
          Project obligations are defined only in a signed agreement.
        </p>
        <h2>Contact</h2>
        <p>
          Questions can be sent to{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </Container>
    </>
  );
}
