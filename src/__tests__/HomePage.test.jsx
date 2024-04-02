import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import HomePage from "../components/HomePage";

describe("Hero section", () => {
   test("renders hero image", () => {
      const { getByLabelText } = render(<HomePage />);
      const heroImage = getByLabelText("Products Background Image");
      expect(heroImage).toBeInTheDocument();
   });

   test("renders h1 element", () => {
      const { getByText } = render(<HomePage />);
      const heroH1 = getByText("Welcome to the Emporium of Extravagant Eccentricities!");
      expect(heroH1).toBeInTheDocument();
   });

   test("renders p element", () => {
      const { getByText } = render(<HomePage />);
      const heroP = getByText("Gather 'round, seekers of splendid sensations and purveyors of peculiarity!");
      expect(heroP).toBeInTheDocument();
   });

   test("renders button", () => {
      const { getByLabelText } = render(<HomePage />);
      const shopNowButton = getByLabelText("Shop");
      expect(shopNowButton).toBeInTheDocument();
   });
});

describe("Main section", () => {
   test("renders the main section", () => {
      const { getByRole } = render(<HomePage />);
      const mainSection = getByRole("main");
      expect(mainSection).toBeInTheDocument();
   });

   test("renders products section", () => {
      const { getByLabelText } = render(<HomePage />);
      const productsSection = getByLabelText("Products Section");
      expect(productsSection).toBeInTheDocument();
   });

   test("renders about section", () => {
      const { getByLabelText } = render(<HomePage />);
      const aboutSection = getByLabelText("About Section");
      expect(aboutSection).toBeInTheDocument();
   });

   test("renders contact section", () => {
      const { getByLabelText } = render(<HomePage />);
      const contactSection = getByLabelText("Contact Section");
      expect(contactSection).toBeInTheDocument();
   });
});

describe("Products section", () => {
   test("renders products grid", () => {
      const { getByLabelText } = render(<HomePage />);
      const productsGrid = getByLabelText("Products Grid");
      expect(productsGrid).toBeInTheDocument();
   });

   test("span element has the corect text", () => {
      const { getByText } = render(<HomePage />);
      const spanElement = getByText("BUY");
      expect(spanElement).toBeInTheDocument();
   });

   test("img element has the correct aria label", () => {
      const { getByLabelText } = render(<HomePage />);
      const imgElement = getByLabelText("Leather Backpack");
      expect(imgElement).toBeInTheDocument();
   });

   test("img element has the correct aria label", () => {
      const { getByLabelText } = render(<HomePage />);
      const imgElement = getByLabelText("Headphones");
      expect(imgElement).toBeInTheDocument();
   });

   test("span element has the correct text", () => {
      const { getByText } = render(<HomePage />);
      const spanElement = getByText("THEM");
      expect(spanElement).toBeInTheDocument();
   });

   test("img element has the correct aria label", () => {
      const { getByLabelText } = render(<HomePage />);
      const imgElement = getByLabelText("Coca Cola");
      expect(imgElement).toBeInTheDocument();
   });

   test("img element has the correct aria label", () => {
      const { getByLabelText } = render(<HomePage />);
      const imgElement = getByLabelText("Makeup");
      expect(imgElement).toBeInTheDocument();
   });

   test("span element has the correct text", () => {
      const { getByText } = render(<HomePage />);
      const spanElement = getByText("ALL");
      expect(spanElement).toBeInTheDocument();
   });

   test("h2 element has the correct text", () => {
      const { getByRole } = render(<HomePage />);
      const heading = getByRole("heading", { name: "This is your CHANCE." });
      expect(heading).toBeInTheDocument();
   });
});

describe("About section", () => {
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
});

describe("Contact form section", () => {
   test("section has correct aria label", () => {
      const { getByLabelText } = render(<HomePage />);
      const contactFormSection = getByLabelText("Contact Section");
      expect(contactFormSection).toBeInTheDocument();
   });

   test("h1 element has the correct text", () => {
      const { getByRole } = render(<HomePage />);
      const heading = getByRole("heading", { name: "Wanna say something?" });
      expect(heading).toBeInTheDocument();
   });

   test("renders contact form with screen width less than 641 px", () => {
      window.innerWidth = 640;
      window.dispatchEvent(new Event("resize"));

      const { getByLabelText } = render(<HomePage />);

      const nameInput = getByLabelText("Name");
      const emailInput = getByLabelText("Email");
      const textArea = getByLabelText("Message");
      const submitButton = getByLabelText("Submit");

      expect(nameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(textArea).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
   });

   test("renders contact form with screen width greater than 640 px", () => {
      window.innerWidth = 641;
      window.dispatchEvent(new Event("resize"));

      const { getByLabelText } = render(<HomePage />);

      const nameInput = getByLabelText("Name");
      const emailInput = getByLabelText("Email");
      const textArea = getByLabelText("Message");
      const submitButton = getByLabelText("Submit");

      expect(nameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(textArea).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
   });
});
