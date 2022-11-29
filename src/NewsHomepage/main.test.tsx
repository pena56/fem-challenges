import { render, screen } from "@testing-library/react";

import NewsPage from "./index";

describe("NewsPage", () => {
  it("renders headline", () => {
    render(<NewsPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("The Bright Future of Web 3.0?");
  });
});
