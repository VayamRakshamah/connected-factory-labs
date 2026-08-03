import { expect, test } from "@playwright/test";

test("critical pages load and primary CTA navigates", async ({ page }) => {
  for (const route of [
    "/",
    "/services",
    "/solutions",
    "/industries",
    "/how-it-works",
    "/demo",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ]) {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
  }
  await page.goto("/");
  await page.getByRole("link", { name: /View Live Demo/i }).click();
  await expect(page).toHaveURL(/\/demo$/);
});

test("mobile menu exposes navigation", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(
    page.getByRole("navigation", { name: "Mobile navigation" }),
  ).toBeVisible();
});

test("contact form validates and handles a successful response", async ({
  page,
}) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Send project enquiry" }).click();
  await expect(page.getByText("Enter your name")).toBeVisible();
  await page.route("**/api/contact", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: '{"ok":true}',
    }),
  );
  await page.getByLabel("Your name").fill("Asha Rao");
  await page.getByLabel("Company").fill("Acme Machines");
  await page.getByLabel("Work email").fill("asha@example.com");
  await page
    .getByLabel("Project type")
    .selectOption({ label: "Machine monitoring pilot" });
  await page.getByLabel("Number of machines").fill("2");
  await page.getByLabel("Known protocol").selectOption({ label: "OPC UA" });
  await page
    .getByLabel("What do you need to see or improve?")
    .fill("We need remote status and alarm visibility for two machines.");
  await page
    .getByLabel("I consent to being contacted about this enquiry.")
    .check();
  await page.getByRole("button", { name: "Send project enquiry" }).click();
  await expect(page.getByRole("status")).toContainText("Thanks");
});

test("demo and 404 disclose their state", async ({ page }) => {
  await page.goto("/demo");
  await expect(page.getByText(/locally generated sample data/i)).toBeVisible();
  await page.goto("/missing-route");
  await expect(
    page.getByRole("heading", { name: "This page is offline." }),
  ).toBeVisible();
});
