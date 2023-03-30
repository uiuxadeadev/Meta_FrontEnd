import React from "react";
import Test from "./components/Test";

import { render, fireEvent, screen } from "@testing-library/react";

test("Adds one", () => {
  // render the App component
  render(<Test />);

  // save the heading in a variable
  const heading = screen.getByTestId("currentNumber");

  // save the button in a variable
  const btn = screen.getByTestId("add-one");

  // click the btn
  fireEvent.click(btn);

  // test assumption
  expect(heading).toHaveTextContent("2");

  // const linkElement = screen.getByText(/Add one/);
  // expect(linkElement).toBeInTheDocument();
});
