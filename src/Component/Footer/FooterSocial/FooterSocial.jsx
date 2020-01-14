import React from "react";
import PropTypes from "prop-types";
import Icon from "../../Shared/Icon";
import styles from "./FooterSocial.module.scss";
/**
 * FooterSocial function for social icon which we are showing on footer section
 */
const FooterSocial = props => {
  const { footerSocialIcons } = props;

  return (
    <div className={styles.FooterSocialLogo}>
      <div className={styles.FooterSocial}>
        <span>Join us on</span>
        <div className={styles.FooterSocialIcon}>
          {footerSocialIcons.map(value => {
            return (
              <Icon
                key={value.IconId}
                altTitle={value.title}
                fileName={value.file}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.FooterLogo}></div>
    </div>
  );
};
// default props value
FooterSocial.defaultProps = {
  footerSocialIcons: []
};
// propTypes validation
FooterSocial.propTypes = {
  footerSocialIcons: PropTypes.array
};
export default FooterSocial;
