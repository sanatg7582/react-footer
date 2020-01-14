import React from "react";
import { mount } from "enzyme";
import FooterSocial from "./FooterSocial";
import Icon from "../../Shared/Icon";
import { footerSocialIcons, IMAGE_PATH } from "../../../FooterData";
describe("renders FooterSocial without crashing ", () => {
  const wrapper = mount(<FooterSocial footerSocialIcons={footerSocialIcons} />);

  it("Load FooterSocal without crash", () => {
    expect(wrapper).toBeTruthy();
  });

  it("footer icon text should be same", () => {
    expect(wrapper.find("FooterSocial").text("span")).toEqual("Join us on");
  });

  it("footer icon loop length", () => {
    expect(wrapper.find(Icon).length).toEqual(5);
  });
  it("checking Icon class should be same", () => {
    expect(
      wrapper
        .find(Icon)
        .find("img")
        .first()
        .props().className
    ).toEqual("iconImage");
  });
  it("checking icon name should be same", () => {
    expect(
      wrapper
        .find(Icon)
        .find("img")
        .first()
        .props().src
    ).toEqual(`${IMAGE_PATH}linkedin.png`);
    expect(
      wrapper
        .find(Icon)
        .find("img")
        .at(1)
        .props().src
    ).toEqual(`${IMAGE_PATH}twitter.png`);
    expect(
      wrapper
        .find(Icon)
        .find("img")
        .at(2)
        .props().src
    ).toEqual(`${IMAGE_PATH}facebook.png`);
    expect(
      wrapper
        .find(Icon)
        .find("img")
        .at(3)
        .props().src
    ).toEqual(`${IMAGE_PATH}youtube.png`);
    expect(
      wrapper
        .find(Icon)
        .find("img")
        .last()
        .props().src
    ).toEqual(`${IMAGE_PATH}insta.png`);
  });
  it("Snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
