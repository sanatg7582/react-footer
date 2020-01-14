import React from "react";
import PropTypes from "prop-types";
import styles from "./FooterItem.module.scss";
/**
 * FooterItem function for footer links
 * @param {string} FooterItems class
 * @param {string} title
 * return element
 */
const FooterItem = props => {
  return (
    <div className={styles.FooterItems}>
      <a href="/" title={props.title}>
        {props.title}
      </a>
    </div>
  );
};
// default props value
FooterItem.defaultProps = {
  title: ""
};
// propType validation
FooterItem.propTypes = {
  title: PropTypes.string
};
export default FooterItem;
