import React from "react";
import { render, screen } from "@testing-library/react";
import Download from "./Download";
import "jest-canvas-mock";

describe("Download test", () => {
  let renderResult;

  beforeEach(() => {
    renderResult = render(<Download />);
  });

  test("renders Download correctly", () => {
    const { getByText } = renderResult;
    expect(getByText(/Download/)).toBeInTheDocument();
    //screen.debug();
  });
});
