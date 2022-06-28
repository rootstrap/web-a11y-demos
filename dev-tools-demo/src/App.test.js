import App from "./App";
import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import React from "react";

expect.extend(toHaveNoViolations);

test("should not have any accessibility violations", async () => {
  const { container } = render(<App />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});

// import { axe, toHaveNoViolations } from "jest-axe";

// expect.extend(toHaveNoViolations);

// it("should demonstrate this matcher`s usage", async () => {
//   const render = () => '<img src="#"/>';

//   // pass anything that outputs html to axe
//   const html = render();

//   expect(await axe(html)).toHaveNoViolations();
// });
