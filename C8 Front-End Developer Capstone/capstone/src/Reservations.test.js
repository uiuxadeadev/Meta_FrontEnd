import { fireEvent, render, screen } from "@testing-library/react";
import Reservations from "./components/Reservations";

describe("Feedback Form", () => {
  test("Renders the reservation form", () => {
    const firstName = "test";
    const handleSubmit = jest.fn();
    render(<Reservations onSubmit={handleSubmit} />);

    const firstNameInput = screen.getByLabelText(/First Name/);
    fireEvent.change(firstNameInput, { target: { value: firstName } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      firstName,
    });
  });
});
