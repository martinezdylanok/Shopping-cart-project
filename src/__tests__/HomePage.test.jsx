import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import HomePage from "../components/HomePage";

describe("Header element", () => {
   test("renders header with correct title", () => {
      const { getByText } = render(<HomePage />);
      const title = getByText("Bob's Bizarre Bazaar");
      expect(title).toBeInTheDocument();
   });

   test("header contains navigation buttons", () => {
      const { getByRole } = render(<HomePage />);
      const toggleMenuButton = getByRole("button", { name: /toggle menu/i });
      const shoppingCartButton = getByRole("button", { name: /shopping cart/i });
      expect(toggleMenuButton).toBeInTheDocument();
      expect(shoppingCartButton).toBeInTheDocument();
   });

   test("navigation buttons have correct accessibility attributes", () => {
      const { getByLabelText } = render(<HomePage />);
      const toggleMenuButton = getByLabelText("Toggle Menu");
      const shoppingCartButton = getByLabelText("Shopping Cart");
      expect(toggleMenuButton).toBeInTheDocument();
      expect(shoppingCartButton).toBeInTheDocument();
   });

   test("navigation buttons contain icons", () => {
      const { getByAltText } = render(<HomePage />);
      const hamburgerMenuIcon = getByAltText("hamburger-menu-icon");
      const cartIcon = getByAltText("cart-icon");
      expect(hamburgerMenuIcon).toBeInTheDocument();
      expect(cartIcon).toBeInTheDocument();
   });

   test("navigation buttons have correct styling", () => {
      const { getByLabelText } = render(<HomePage />);
      const toggleMenuButton = getByLabelText("Toggle Menu");
      const shoppingCartButton = getByLabelText("Shopping Cart");
      expect(toggleMenuButton).toHaveClass("hamburger-button");
      expect(shoppingCartButton).toHaveClass("cart-button");
   });
});

describe("Main Component", () => {
   test("checks if the main element was rendered", () => {
      const { container } = render(<HomePage />);
      const main = container.querySelector("main");
      expect(main).toBeInTheDocument();
   });

   test("checks if the main interactive buttons container was rendered", () => {
      const { container } = render(<HomePage />);
      const interactiveButtons = container.querySelector(".interactive-buttons");
      expect(interactiveButtons).toBeInTheDocument();
   });

   test("checks if interactive buttons contains buttons", () => {
      const { container } = render(<HomePage />);
      const interactiveButtons = container.querySelector(".interactive-buttons");
      const buttons = interactiveButtons.querySelectorAll("button");
      expect(buttons.length).toBe(2);
   });

   test("checks if the current page button contains a p element", () => {
      const { container } = render(<HomePage />);
      const currentPageButton = container.querySelector(".current-page-button");
      const p = currentPageButton.querySelector("p");
      expect(p).toBeInTheDocument();
   });

   test("checks if the shopping cart button contains an img element", () => {
      const { container } = render(<HomePage />);
      const shoppingCartButton = container.querySelector(".shopping-cart-button");
      const img = shoppingCartButton.querySelector("img");
      expect(img).toBeInTheDocument();
   });

   test("checks if the text container was rendered", () => {
      const { container } = render(<HomePage />);
      const textContainer = container.querySelector(".text-container");
      expect(textContainer).toBeInTheDocument();
   });

   test("checks if the text container contains three elements", () => {
      const { container } = render(<HomePage />);
      const textContainer = container.querySelector(".text-container");
      const elements = textContainer.querySelectorAll("h1, p, div");
      expect(elements.length).toBe(3);
   });

   test("checks if the footer element was rendered", () => {
      const { container } = render(<HomePage />);
      const footer = container.querySelector("footer");
      expect(footer).toBeInTheDocument();
   });

   test("checks if the footer contains a p element", () => {
      const { container } = render(<HomePage />);
      const footer = container.querySelector("footer");
      const p = footer.querySelector("p");
      expect(p).toBeInTheDocument();
   });
});
