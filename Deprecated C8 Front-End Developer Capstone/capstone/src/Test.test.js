import React from "react";
import { render, screen } from "@testing-library/react";
import Test from "./components/Test";

test("Render", () => {
  render(<Test />);
  const linkElement = screen.getByTestId("Little Lemon Restaurant");

  expect(linkElement).toHaveBeenCalledWith();
});