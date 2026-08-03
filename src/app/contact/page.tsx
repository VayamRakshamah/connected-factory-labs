import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Container, PageHero } from "@/components/ui";
import { siteConfig } from "@/config/site";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Discuss an industrial IoT, machine integration, monitoring dashboard, or connected OEM portal project.",
};
export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="A useful first conversation"
        title="Discuss your machine"
        text="Share the equipment, protocol if known, and the visibility problem. We’ll respond with focused questions—not a generic sales deck."
      />
      <section className="section">
        <Container className="contact-layout">
          <div>
            <div className="contact-details">
              <a href={`mailto:${siteConfig.email}`}>
                <Mail />
                <span>
                  <small>Email</small>
                  {siteConfig.email}
                </span>
              </a>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                <Phone />
                <span>
                  <small>Phone</small>
                  {siteConfig.phone}
                </span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
              >
                <MessageCircle />
                <span>
                  <small>WhatsApp</small>
                  {siteConfig.whatsapp}
                </span>
              </a>
              <div>
                <MapPin />
                <span>
                  <small>Location</small>
                  {siteConfig.address}
                </span>
              </div>
            </div>
            <div className="contact-tip">
              <b>Helpful details to include</b>
              <ul>
                <li>Machine make and controller model</li>
                <li>Known protocol or available data interface</li>
                <li>Signals you need to monitor</li>
                <li>Who will use the dashboard</li>
                <li>Plant network or remote-access constraints</li>
              </ul>
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
