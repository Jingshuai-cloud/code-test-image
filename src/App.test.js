import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Image from "./components/Image/Image";
import Button from "./components/Download/Download";

jest.mock("./components/Image/Image", () => jest.fn(() => "<Image />"));
jest.mock("./components/Download/Download", () => jest.fn(() => "<Button />"));

describe("App test", () => {
  let renderResult;

  beforeEach(() => {
    Image.mockClear();
    Button.mockClear();
    renderResult = render(<App />);
  });

  test("renders Title correctly", () => {
    const { getByText } = renderResult;
    expect(getByText(/Download Image/)).toBeInTheDocument();
  });
});
