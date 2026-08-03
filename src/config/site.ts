export const siteConfig = {
  companyName: "Connected Factory Labs",
  shortName: "CFL",
  tagline: "Turn machine data into decisions.",
  description:
    "Industrial IoT integration, secure cloud architecture, and practical machine dashboards for manufacturers and OEMs.",
  founderName: "Founder name",
  founderBio:
    "A technically led integration practice focused on making industrial data useful, reliable, and secure.",
  companyStory:
    "We bridge the gap between industrial equipment and modern software—mapping the right signals, building a dependable data path, and presenting operators with information they can act on.",
  email: "hello@connectedfactorylabs.com",
  phone: "+91 00000 00000",
  whatsapp: "+91 00000 00000",
  address: "India · Serving clients remotely",
  domain: "https://connectedfactorylabs.com",
  linkedInUrl: "https://www.linkedin.com",
  githubUrl: "https://github.com",
  demoUrl: "/demo",
  bookingUrl: "/contact",
} as const;

export type SiteConfig = typeof siteConfig;
