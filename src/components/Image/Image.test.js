import React from "react";
import { render } from "@testing-library/react";
import Image from "./Image";
import "jest-canvas-mock";

describe("Image test", () => {
  let renderResult;

  beforeEach(() => {
    renderResult = render(<Image />);
  });

  test("renders Canvas correctly", () => {
    const { getByText } = renderResult;
    expect(getByText(/canvas/)).toBeInTheDocument();
  });

  test("Generate Image Values correctly", () => {
    const img = new Image();
    const data = img.generateValues();
    expect(data.length).toBe(32768);
  });
});
