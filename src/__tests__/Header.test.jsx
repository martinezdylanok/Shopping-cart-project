import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";

import Header from "../components/Header";

describe("Header section", () => {
   test("renders h1 element", () => {
      const { getByRole } = render(<Header />);
      const h1 = getByRole("banner");
      expect(h1).toBeInTheDocument();
   });
});

describe("Header section with screen width less than 641 px", () => {
   test("render button element with correct aria label", () => {
      const { getByLabelText } = render(<Header isDesktop={false} />);
      const webSectionsButton = getByLabelText("Web Sections");
      expect(webSectionsButton).toBeInTheDocument();
   });
});

describe("Header section with screen width greater than 640 px", () => {
   test("render nav element with correct aria label", () => {
      const { getByLabelText } = render(<Header isDesktop />);
      const navElement = getByLabelText("Primary Navigation");
      expect(navElement).toBeInTheDocument();
   });

   test("render 4 a elements inside the nav element", () => {
      const { getByLabelText } = render(<Header isDesktop />);
      const navElement = getByLabelText("Primary Navigation");
      const aElements = navElement.querySelectorAll("a");
      expect(aElements.length).toBe(4);
   });

   test("each a element has correct aria label", () => {
      const { getByLabelText } = render(<Header isDesktop />);
      const navElement = getByLabelText("Primary Navigation");
      const aElements = navElement.querySelectorAll("a");
      expect(aElements[0]).toHaveAttribute("aria-label", "Home");
      expect(aElements[1]).toHaveAttribute("aria-label", "Products");
      expect(aElements[2]).toHaveAttribute("aria-label", "About");
      expect(aElements[3]).toHaveAttribute("aria-label", "Contact");
   });

   test("the cart icon is rendered", () => {
      const { getByAltText } = render(<Header isDesktop />);
      const cartIcon = getByAltText("cart-icon");
      expect(cartIcon).toBeInTheDocument();
   });
});
