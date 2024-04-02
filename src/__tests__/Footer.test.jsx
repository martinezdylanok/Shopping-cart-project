import { describe, test, expect } from "vitest";
import { render } from "@testing-library/react";
import React from "react";

import Footer from "../components/Footer";

describe("Footer section with screen width less than 641 px", () => {
   test("renders footer section", () => {
      const { getByRole } = render(<Footer isDesktop={false} />);

      const footerSection = getByRole("contentinfo");
      expect(footerSection).toBeInTheDocument();
   });

   test("renders h1 element with correct text", () => {
      const { getByText } = render(<Footer isDesktop={false} />);

      const h1Element = getByText("Bob's Bizarre Bazaar");

      expect(h1Element).toBeInTheDocument();
   });

   test("renders button with correct aria label", () => {
      const { getByLabelText } = render(<Footer isDesktop={false} />);

      const ToggleMenuButton = getByLabelText("Toggle Menu");
      expect(ToggleMenuButton).toBeInTheDocument();
   });

   test("renders button with correct aria label", () => {
      const { getByLabelText } = render(<Footer isDesktop={false} />);

      const GitHubButton = getByLabelText("GitHub");
      expect(GitHubButton).toBeInTheDocument();
   });

   test("renders button with correct aria label", () => {
      const { getByLabelText } = render(<Footer isDesktop={false} />);

      const LinkedIn = getByLabelText("LinkedIn");
      expect(LinkedIn).toBeInTheDocument();
   });

   test("renders span element with correct text", () => {
      const { getByText } = render(<Footer isDesktop={false} />);

      const SpanElement = getByText("Made with ❤️ by DylanMartinezOk");
      expect(SpanElement).toBeInTheDocument();
   });

   test("renders span element with correct text", () => {
      const { getByText } = render(<Footer isDesktop={false} />);

      const SpanElement = getByText("© 2024 Bob's Bizarre Bazaar");
      expect(SpanElement).toBeInTheDocument();
   });
});

describe("Footer section with screen width greater than 640 px", () => {
   test("renders footer section", () => {
      const { getByRole } = render(<Footer isDesktop />);

      const footerSection = getByRole("contentinfo");
      expect(footerSection).toBeInTheDocument();
   });

   test("renders h1 element with correct text", () => {
      const { getByText } = render(<Footer isDesktop />);

      const h1Element = getByText("Bob's Bizarre Bazaar");

      expect(h1Element).toBeInTheDocument();
   });

   test("renders h2 element with correct text", () => {
      const { getByText } = render(<Footer isDesktop />);

      const h2Element = getByText("Main links");
      expect(h2Element).toBeInTheDocument();
   });

   test("render a element with correct aria label", () => {
      const { getByLabelText } = render(<Footer isDesktop />);

      const aElement = getByLabelText("Home");

      expect(aElement).toBeInTheDocument();
   });

   test("render a element with correct aria label", () => {
      const { getByLabelText } = render(<Footer isDesktop />);

      const aElement = getByLabelText("Home");

      expect(aElement).toBeInTheDocument();
   });

   test("render a element with correct aria label", () => {
      const { getByLabelText } = render(<Footer isDesktop />);

      const aElement = getByLabelText("Home");

      expect(aElement).toBeInTheDocument();
   });

   test("render a element with correct aria label", () => {
      const { getByLabelText } = render(<Footer isDesktop />);

      const aElement = getByLabelText("Home");

      expect(aElement).toBeInTheDocument();
   });

   test("renders h2 element with correct text", () => {
      const { getByText } = render(<Footer isDesktop />);

      const h2Element = getByText("Get in touch");
      expect(h2Element).toBeInTheDocument();
   });

   test("renders button with correct aria label", () => {
      const { getByLabelText } = render(<Footer isDesktop />);

      const GitHubButton = getByLabelText("GitHub");
      expect(GitHubButton).toBeInTheDocument();
   });

   test("renders button with correct aria label", () => {
      const { getByLabelText } = render(<Footer isDesktop />);

      const LinkedIn = getByLabelText("LinkedIn");
      expect(LinkedIn).toBeInTheDocument();
   });

   test("renders span element with correct text", () => {
      const { getByText } = render(<Footer isDesktop />);

      const SpanElement = getByText("© 2024 Bob's Bizarre Bazaar");
      expect(SpanElement).toBeInTheDocument();
   });
});
