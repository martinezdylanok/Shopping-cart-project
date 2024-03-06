import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import HomePage from "../components/HomePage";

describe("HomePage", () => {
   test("checks if the homepage component was rendered", () => {
      const { getByText } = render(<HomePage />);
      const header = getByText(/Shopping Web/i);
      expect(header).toBeInTheDocument();
   });

   test("checks if the header child element was rendered", () => {
      const { container } = render(<HomePage />);
      const header = container.querySelector("header");
      expect(header).toBeInTheDocument();
   });

   test("checks if the h1 text is correct", () => {
      const { getByText } = render(<HomePage />);
      const h1 = getByText(/Shopping Web/i);
      expect(h1.textContent).toBe("Shopping Web");
   });

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
