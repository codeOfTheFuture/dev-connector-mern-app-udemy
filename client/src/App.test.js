import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../test/testUtils";
import App from "./App";

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);

test("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "app-component");
  expect(component.length).toBe(1);
});
