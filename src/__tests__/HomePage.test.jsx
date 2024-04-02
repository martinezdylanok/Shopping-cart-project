import { describe, test, expect, beforeEach } from "vitest";
import { getByText, render } from "@testing-library/react";
import React from "react";
import HomePage from "../components/HomePage";

describe("Header section", () => {
   test("renders h1 element", () => {
      const { getByRole } = render(<HomePage />);
      const h1 = getByRole("banner");
      expect(h1).toBeInTheDocument();
   });
});

describe("Header section with screen width less than 641 px", () => {
   beforeEach(() => {
      window.innerWidth = 640;
      window.dispatchEvent(new Event("resize"));
   });

   test("render button element with correct aria label", () => {
      const { getByLabelText } = render(<HomePage />);
      const webSectionsButton = getByLabelText("Web Sections");
      expect(webSectionsButton).toBeInTheDocument();
   });
});

describe("Header section with screen width greater than 640 px", () => {
   beforeEach(() => {
      window.innerWidth = 641;
      window.dispatchEvent(new Event("resize"));
   });

   test("render nav element with correct aria label", () => {
      const { getByLabelText } = render(<HomePage />);
      const navElement = getByLabelText("Primary Navigation");
      expect(navElement).toBeInTheDocument();
   });

   test("render 4 a elements inside the nav element", () => {
      const { getByLabelText } = render(<HomePage />);
      const navElement = getByLabelText("Primary Navigation");
      const aElements = navElement.querySelectorAll("a");
      expect(aElements.length).toBe(4);
   });

   test("each a element has correct aria label", () => {
      const { getByLabelText } = render(<HomePage />);
      const navElement = getByLabelText("Primary Navigation");
      const aElements = navElement.querySelectorAll("a");
      expect(aElements[0]).toHaveAttribute("aria-label", "Home");
      expect(aElements[1]).toHaveAttribute("aria-label", "Products");
      expect(aElements[2]).toHaveAttribute("aria-label", "About");
      expect(aElements[3]).toHaveAttribute("aria-label", "Contact");
   });

   test("the cart icon is rendered", () => {
      const { getByAltText } = render(<HomePage />);
      const cartIcon = getByAltText("cart-icon");
      expect(cartIcon).toBeInTheDocument();
   });
});

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

   describe("Footer section with screen width less than 641 px", () => {
      beforeEach(() => {
         window.innerWidth = 640;
         window.dispatchEvent(new Event("resize"));
      });

      test("renders footer section", () => {
         const { getByRole } = render(<HomePage />);

         const footerSection = getByRole("contentinfo");
         expect(footerSection).toBeInTheDocument();
      });

      test("renders second h1 element with correct text", () => {
         const { getAllByText } = render(<HomePage />);

         const h1Elements = getAllByText("Bob's Bizarre Bazaar");
         const secondH1Element = h1Elements[1];

         expect(h1Elements.length).toBeGreaterThanOrEqual(2);
         expect(secondH1Element).toBeInTheDocument();
      });

      test("renders button with correct aria label", () => {
         const { getByLabelText } = render(<HomePage />);

         const ToggleMenuButton = getByLabelText("Toggle Menu");
         expect(ToggleMenuButton).toBeInTheDocument();
      });

      test("renders button with correct aria label", () => {
         const { getByLabelText } = render(<HomePage />);

         const GitHubButton = getByLabelText("GitHub");
         expect(GitHubButton).toBeInTheDocument();
      });

      test("renders button with correct aria label", () => {
         const { getByLabelText } = render(<HomePage />);

         const LinkedIn = getByLabelText("LinkedIn");
         expect(LinkedIn).toBeInTheDocument();
      });

      test("renders span element with correct text", () => {
         const { getByText } = render(<HomePage />);

         const SpanElement = getByText("Made with ❤️ by DylanMartinezOk");
         expect(SpanElement).toBeInTheDocument();
      });

      test("renders span element with correct text", () => {
         const { getByText } = render(<HomePage />);

         const SpanElement = getByText("© 2024 Bob's Bizarre Bazaar");
         expect(SpanElement).toBeInTheDocument();
      });
   });

   describe("Footer section with screen width greater than 640 px", () => {
      beforeEach(() => {
         window.innerWidth = 641;
         window.dispatchEvent(new Event("resize"));
      });

      test("renders footer section", () => {
         const { getByRole } = render(<HomePage />);

         const footerSection = getByRole("contentinfo");
         expect(footerSection).toBeInTheDocument();
      });

      test("renders second h1 element with correct text", () => {
         const { getAllByText } = render(<HomePage />);

         const h1Elements = getAllByText("Bob's Bizarre Bazaar");
         const secondH1Element = h1Elements[1];

         expect(h1Elements.length).toBeGreaterThanOrEqual(2);
         expect(secondH1Element).toBeInTheDocument();
      });

      test("renders h2 element with correct text", () => {
         const { getByText } = render(<HomePage />);

         const h2Element = getByText("Main links");
         expect(h2Element).toBeInTheDocument();
      });

      test("render a element with correct aria label", () => {
         const { getAllByLabelText } = render(<HomePage />);

         const aElements = getAllByLabelText("Home");
         const secondAElement = aElements[1];

         expect(aElements.length).toBeGreaterThanOrEqual(2);
         expect(secondAElement).toBeInTheDocument();
      });

      test("render a element with correct aria label", () => {
         const { getAllByLabelText } = render(<HomePage />);

         const aElements = getAllByLabelText("Products");
         const secondAElement = aElements[1];

         expect(aElements.length).toBeGreaterThanOrEqual(2);
         expect(secondAElement).toBeInTheDocument();
      });

      test("render a element with correct aria label", () => {
         const { getAllByLabelText } = render(<HomePage />);

         const aElements = getAllByLabelText("About");
         const secondAElement = aElements[1];

         expect(aElements.length).toBeGreaterThanOrEqual(2);
         expect(secondAElement).toBeInTheDocument();
      });

      test("render a element with correct aria label", () => {
         const { getAllByLabelText } = render(<HomePage />);

         const aElements = getAllByLabelText("Contact");
         const secondAElement = aElements[1];

         expect(aElements.length).toBeGreaterThanOrEqual(2);
         expect(secondAElement).toBeInTheDocument();
      });

      test("renders h2 element with correct text", () => {
         const { getByText } = render(<HomePage />);

         const h2Element = getByText("Get in touch");
         expect(h2Element).toBeInTheDocument();
      });

      test("renders button with correct aria label", () => {
         const { getByLabelText } = render(<HomePage />);

         const GitHubButton = getByLabelText("GitHub");
         expect(GitHubButton).toBeInTheDocument();
      });

      test("renders button with correct aria label", () => {
         const { getByLabelText } = render(<HomePage />);

         const LinkedIn = getByLabelText("LinkedIn");
         expect(LinkedIn).toBeInTheDocument();
      });

      test("renders span element with correct text", () => {
         const { getByText } = render(<HomePage />);

         const SpanElement = getByText("© 2024 Bob's Bizarre Bazaar");
         expect(SpanElement).toBeInTheDocument();
      });
   });
});
