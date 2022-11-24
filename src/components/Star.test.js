import { render, fireEvent, screen } from "@testing-library/react";
import { Star } from "./Star";

test("render an h1", () => {
  render(<Star />);
  const h1 = screen.getByText(/bright star/i);
  expect(h1).toHaveTextContent("Bright Star");
});

test("selecting checkbox should change value to true", () => {
  render(<Star />);
  const checkbox = screen.getByLabelText(/not checked/i);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
