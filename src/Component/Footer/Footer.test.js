import React from "react";
import { mount } from "enzyme";
import Footer from "./Footer";
import Text from "../Shared/Text";
import FooterItem from "./FooterItem";
import FooterCopyRight from "./FooterCopyRight";
describe("renders Footer without crashing ", () => {
  const wrapper = mount(<Footer />);

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy();
  });

  it("render footer section render should 5 times ", () => {
    expect(wrapper.find(".FooterSectionChild")).toHaveLength(5);
  });

  it("checking footer heading title, should be same", () => {
    expect(
      wrapper
        .find(Text)
        .first()
        .props().heading
    ).toEqual("Customer Service");
    expect(
      wrapper
        .find(Text)
        .at(1)
        .props().heading
    ).toEqual("Corporate Info");
    expect(
      wrapper
        .find(Text)
        .at(2)
        .props().heading
    ).toEqual("Staples Corporate Solution");
    expect(
      wrapper
        .find(Text)
        .at(3)
        .props().heading
    ).toEqual("New Customer");
    expect(
      wrapper
        .find(Text)
        .at(4)
        .props().heading
    ).toEqual("Join the Staples Team");

    // const headingtexts = wrapper.find(Text).map(node => node.text());
    // expect(headingtexts).toEqual([
    //   "Customer Service",
    //   "Corporate Info",
    //   "Staples Corporate Solution",
    //   "New Customer",
    //   "Join the Staples Team"
    // ]);
  });

  it("checking footer item lenght should be 18", () => {
    expect(wrapper.find(FooterItem)).toHaveLength(18);
  });

  it("checking FooterCopyRight prop value and length should be same", () => {
    expect(wrapper.find(FooterCopyRight).length).toEqual(1);
    expect(wrapper.find(FooterCopyRight).text("span")).toEqual(
      "Copyright © 2001-2019 Coporate Express Canada. Inc.. a Staples company. All rights reserverd.Terms & Conditions    |   Privacy Policy    |   Staples Bussiness Advantage"
    );
  });

  it("checking Footer toggle button click function", () => {
    expect(wrapper.find("button").simulate("click")).toHaveLength(1);
  });

  it("default footer section class", () => {
    wrapper.setState({ toggle: false });
    expect(
      wrapper
        .find("div")
        .first()
        .hasClass("footerHide")
    ).toEqual(true);
  });
  it("Snapshot test for Footer Component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
