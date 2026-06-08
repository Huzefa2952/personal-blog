import { render, screen } from "@testing-library/react";
import Header from "./components/Header";

test("renders blog name passed as prop", () => {
  render(<Header name="My Test Blog" />);

  expect(screen.getByText("My Test Blog")).toBeInTheDocument();
});