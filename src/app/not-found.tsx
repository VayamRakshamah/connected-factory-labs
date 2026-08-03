import { Container, ButtonLink } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="not-found">
      <Container>
        <span>404 · SIGNAL NOT FOUND</span>
        <h1>This page is offline.</h1>
        <p>
          The route you requested is not connected. Return to the main site or
          open the machine demo.
        </p>
        <div>
          <ButtonLink href="/">Return home</ButtonLink>
          <ButtonLink href="/demo" variant="secondary">
            View demo
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
