import React from "react";
import { mount } from "enzyme";
import FooterCopyRight from "./FooterCopyRight";
describe("Load FooterCopyRight with out crash", () => {
  const wrapper = mount(<FooterCopyRight />);
  it("render with out crash", () => {
    expect(wrapper).toBeTruthy();
  });
  it("Snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
