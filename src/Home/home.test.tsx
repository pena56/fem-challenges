import { render, screen } from "@testing-library/react";

import Home from "./index";

describe("Home", () => {
  it("renders headline", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Solutions to Frontend Mentor Challenges");
  });
});
