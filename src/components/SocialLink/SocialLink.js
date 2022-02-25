import React from "react";
import PropTypes from "prop-types";
import "./SocialLink.scss";

const SocialLink = ({ href, linkAlt, linkTitle, icon, iconAlt, iconTitle }) => (
  <a
    href={href}
    className="footer__link"
    alt={linkAlt}
    title={linkTitle}
    target="_blank"
    rel="noreferrer"
  >
    <img
      src={icon}
      alt={iconAlt}
      title={iconTitle}
      className="footer__link__icon"
    />
  </a>
);

SocialLink.propTypes = {
  href: PropTypes.string.isRequired,
  linkAlt: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconAlt: PropTypes.string.isRequired,
  iconTitle: PropTypes.string.isRequired,
};

export default SocialLink;
