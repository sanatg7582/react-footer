import React, { Component } from "react";
import styles from "./Footer.module.scss";
import FooterItem from "./FooterItem";
import Text from "../Shared/Text";
import { footerData, footerSocialIcons } from "../../FooterData";
import FooterSocial from "./FooterSocial";
import FooterCopyRight from "./FooterCopyRight";

/**
 * Footer component render footer section with social logo and copyright text
 */
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
  }
  toggleFooter = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };
  render() {
    return (
      <>
        <button className={styles.btn} onClick={this.toggleFooter}>
          Toggle Footer
        </button>
        <div
          className={this.state.toggle ? styles.footerShow : styles.footerHide}
        >
          <div className={styles.FooterSection}>
            {footerData.map(data => {
              return (
                <div className={styles.FooterSectionChild} key={data.headingId}>
                  <Text heading={data.heading} strong={true} />
                  {data.Items.map(item => {
                    return <FooterItem title={item.title} key={item.ItemId} />;
                  })}
                </div>
              );
            })}
          </div>
          <FooterSocial footerSocialIcons={footerSocialIcons} />
          <div className="footercopyright">
            <FooterCopyRight
              copyrightcontent="Copyright &copy; 2001-2019 Coporate Express Canada. Inc.. a Staples company. All rights reserverd."
              tnccontent="Terms & Conditions    |   Privacy Policy    |   Staples Bussiness Advantage"
            />
          </div>
        </div>
      </>
    );
  }
}
export default Footer;
