import React from "react";
import Reservations from "./components/Reservations";
import { BrowserRouter as Router } from "react-router-dom";

const { fireEvent, render, screen } = require("@testing-library/react");

describe("Feedback Form", () => {
  test("Renders the reservation form", () => {
    const firstName = "test";
    const handleSubmit = jest.fn();
    render(
      <ErrorBoundary>
        <Router>
          <Reservations onSubmit={handleSubmit} />
        </Router>
      </ErrorBoundary>
    );

    // const firstNameInput = screen.getByLabelText(/First Name/);
    const firstNameInput = screen.getByLabelText("First Name");
    // const firstNameInput = screen.getByRole("firstName", { name: "First Name" });
    fireEvent.change(firstNameInput, { target: { value: firstName } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(firstNameInput).toHaveBeenCalledWith({
      firstName,
    });
  });
});
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  //   // componentDidCatch(error, errorInfo) {
  //   //   // You can also log the error to an error reporting service
  //   //   logErrorToMyService(error, errorInfo);
  //   // }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
