import type { Metadata } from "next";
import { Check, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Breadcrumbs, Container, Eyebrow } from "@/components/ui";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discuss an industrial IoT, machine integration, monitoring dashboard, or connected OEM portal project.",
};

const usefulDetails = [
  "Machine make and controller model",
  "What the team cannot see today",
  "Known protocol, if available",
  "Who needs to use the information",
];

export default function Contact() {
  return (
    <section className="contact-page">
      <Container>
        <Breadcrumbs current="Discuss your machine" />
        <div className="contact-page-grid">
          <div className="contact-intro">
            <Eyebrow>A useful first conversation</Eyebrow>
            <h1>Tell us where visibility breaks down.</h1>
            <p>
              Share the equipment and the operational question. We’ll respond
              with focused questions that help shape a sensible first step—not a
              generic sales deck.
            </p>

            <div className="contact-promises">
              <p>Helpful context to include</p>
              <ul>
                {usefulDetails.map((detail) => (
                  <li key={detail}>
                    <Check aria-hidden="true" /> {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-details">
              <a href={`mailto:${siteConfig.email}`}>
                <Mail aria-hidden="true" />
                <span>
                  <small>Email</small>
                  {siteConfig.email}
                </span>
              </a>
              <div>
                <MapPin aria-hidden="true" />
                <span>
                  <small>Based in</small>
                  {siteConfig.address}
                </span>
              </div>
            </div>
          </div>

          <div className="contact-form-shell">
            <div className="contact-form-heading">
              <span>Project enquiry</span>
              <h2>What would a useful first view help you understand?</h2>
              <p>
                Fields marked as required help us respond with the right
                questions.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
