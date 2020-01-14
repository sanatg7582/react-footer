import React from "react";
import PropTypes from "prop-types";
import styles from "./FooterCopyRight.module.scss";
import Text from "../../Shared/Text";
/**
 * FooterTermsAndCondition function for print label below copyright section
 * @param {string} tnccontent
 */
const FooterTermsAndCondition = tnccontent => {
  return (
    <div className={styles.tnccontent}>
      <Text heading={tnccontent} />
    </div>
  );
};
/**
 * This Fucntion for copyright content
 * @param {string} copyrighClass
 * @param {string} copyrightContent
 * return Element
 */
const FooterCopyRight = props => {
  const { copyrightcontent, tnccontent } = props;
  return (
    <div className={styles.footerCopyrRight}>
      <Text heading={copyrightcontent} />
      {FooterTermsAndCondition(tnccontent)}
    </div>
  );
};
// default props value
FooterCopyRight.defaultProps = {
  copyrightcontent: ""
};

// propType validation
FooterCopyRight.propTypes = {
  copyrightcontent: PropTypes.string
};
export default FooterCopyRight;
