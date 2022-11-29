import { render, screen } from "@testing-library/react";

import Home from "./index";

describe("NewsHomePage", () => {
  it("renders headline", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("The Bright Future of Web 3.0?");
  });
});
