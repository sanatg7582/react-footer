import React from "react";
import { shallow } from "enzyme";
import FooterItem from "./FooterItem";

describe("renders FooterItem without crashing ", () => {
  const wrapper = shallow(<FooterItem title="" />);
  it("Load FooterItem", () => {
    expect(wrapper).toBeTruthy();
  });
  it("Snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
