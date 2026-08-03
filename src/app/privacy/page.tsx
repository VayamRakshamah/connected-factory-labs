import type { Metadata } from "next";
import { Container, PageHero } from "@/components/ui";
import { siteConfig } from "@/config/site";
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.companyName} handles website enquiry data.`,
};
export default function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        text="A plain-language summary of how website enquiry information is handled."
      />
      <Container className="legal">
        <p>Last updated: 3 August 2026</p>
        <h2>Information we collect</h2>
        <p>
          When you submit an enquiry, we collect the contact and project
          information you provide. Basic hosting logs may also record technical
          details such as IP address, browser type, and request time for
          security and reliability.
        </p>
        <h2>How we use information</h2>
        <p>
          We use enquiry information to respond, assess requested work, maintain
          business records, and protect the website. We do not sell personal
          information.
        </p>
        <h2>Service providers and retention</h2>
        <p>
          Information may be processed by hosting, email, or form-delivery
          providers configured for this site. We retain it only as long as
          reasonably necessary for the enquiry, legal obligations, or legitimate
          business records.
        </p>
        <h2>Your choices</h2>
        <p>
          You may request access, correction, or deletion by contacting{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          Applicable rights depend on your location.
        </p>
        <h2>Security and updates</h2>
        <p>
          Reasonable safeguards are used, but no internet transmission is
          completely secure. This policy may be updated as the website and
          service providers change.
        </p>
      </Container>
    </>
  );
}
