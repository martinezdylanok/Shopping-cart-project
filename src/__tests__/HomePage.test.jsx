import { describe, test, expect, beforeEach } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import HomePage from "../components/HomePage";

describe("Header element with screen width less than 1024px", () => {
   beforeEach(() => {
      window.innerWidth = 1023;
      window.dispatchEvent(new Event("resize"));
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
});

describe("Header element", () => {
   test("renders header with correct title", () => {
      const { getByText } = render(<HomePage />);
      const title = getByText("Bob's Bizarre Bazaar");
      expect(title).toBeInTheDocument();
   });

   test("the cart icon is rendered", () => {
      const { getByAltText } = render(<HomePage />);
      const cartIcon = getByAltText("cart-icon");
      expect(cartIcon).toBeInTheDocument();
   });

   test("navigation button has correct styling", () => {
      const { getByLabelText } = render(<HomePage />);
      const shoppingCartButton = getByLabelText("Shopping Cart");
      expect(shoppingCartButton).toHaveClass("cart-button");
   });

   test("the menu icon is not rendered if screen width is greater than 1024px", () => {
      window.innerWidth = 1025;
      window.dispatchEvent(new Event("resize"));
      const { queryByAltText } = render(<HomePage />);
      const menuIcon = queryByAltText("hamburger-menu-icon");
      expect(menuIcon).not.toBeInTheDocument();
   });
});

describe("Hero element", () => {
   test("renders hero element", () => {
      const { getByText } = render(<HomePage />);
      const hero = getByText("Welcome to the Emporium of Extravagant Eccentricities!");
      expect(hero).toBeInTheDocument();
   });

   test("renders hero content", () => {
      const { getByText } = render(<HomePage />);
      const heroContent = getByText("Gather 'round, seekers of splendid sensations and purveyors of peculiarity!");
      expect(heroContent).toBeInTheDocument();
   });

   test("renders shop now button", () => {
      const { getByRole } = render(<HomePage />);
      const shopNowButton = getByRole("button", { name: /shop now/i });
      expect(shopNowButton).toBeInTheDocument();
   });
});

describe("Products element", () => {
   test("renders all product images correctly", () => {
      const { getByAltText } = render(<HomePage />);

      const leatherBackpackImage = getByAltText("Leather Backpack");
      const headphonesImage = getByAltText("Headphones");
      const cocaColaImage = getByAltText("Coca Cola");
      const makeUpImage = getByAltText("Make Up");

      expect(leatherBackpackImage).toBeInTheDocument();
      expect(headphonesImage).toBeInTheDocument();
      expect(cocaColaImage).toBeInTheDocument();
      expect(makeUpImage).toBeInTheDocument();
   });

   test("renders all product descriptions correctly", () => {
      const { getByText } = render(<HomePage />);

      const buyText = getByText("BUY");
      const themText = getByText("THEM");
      const allText = getByText("ALL");

      expect(buyText).toBeInTheDocument();
      expect(themText).toBeInTheDocument();
      expect(allText).toBeInTheDocument();
   });

   test("renders the products container description correctly", () => {
      const { getByText } = render(<HomePage />);

      const containerDescription = getByText("This is your CHANCE.");
      expect(containerDescription).toBeInTheDocument();
   });
});

describe("About element", () => {
   test("renders Bob image with correct alt text", () => {
      const { getByAltText } = render(<HomePage />);
      const bobImage = getByAltText("Bob");
      expect(bobImage).toBeInTheDocument();
   });

   test("renders about section heading", () => {
      const { getByRole } = render(<HomePage />);
      const heading = getByRole("heading", { name: /who the f\*\*k is bob\?/i });
      expect(heading).toBeInTheDocument();
   });

   test("renders about section text content", () => {
      const { getByText } = render(<HomePage />);
      const text = getByText(/meet bob, a jovial chap with a penchant for pranks/i);
      expect(text).toBeInTheDocument();
   });

   test("about section has correct styling", () => {
      const { getByText } = render(<HomePage />);
      const section = getByText(/meet bob, a jovial chap with a penchant for pranks/i).closest("section");
      expect(section).toHaveClass("about-container");
   });
});
