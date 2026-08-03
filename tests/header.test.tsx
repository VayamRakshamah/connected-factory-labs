import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Header } from "@/components/header";

vi.mock("next/navigation", () => ({ usePathname: () => "/services" }));

describe("Header", () => {
  it("renders navigation and the primary contact action", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: "Services" })).toHaveClass(
      "active",
    );
    expect(
      screen.getByRole("link", { name: "Discuss your machine" }),
    ).toHaveAttribute("href", "/contact");
  });
  it("opens and closes the accessible mobile menu", () => {
    render(<Header />);
    const button = screen.getByRole("button", { name: "Open menu" });
    fireEvent.click(button);
    expect(
      screen.getByRole("navigation", { name: "Mobile navigation" }),
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Close menu" }));
    expect(
      screen.queryByRole("navigation", { name: "Mobile navigation" }),
    ).not.toBeInTheDocument();
  });
});
