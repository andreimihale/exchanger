import React from "react";
import "./Footer.scss";
import TwitterIcon from "../../static/akar-icons_twitter-fill.svg";
import GithubIcon from "../../static/akar-icons_github-fill.svg";
import LinkedinIcon from "../../static/akar-icons_linkedin-box-fill.svg";
import SocialLink from "../SocialLink/SocialLink";

const Footer = () => {
  const socialIcons = [
    {
      href: "https://twitter.com/mihale_andrei",
      linkAlt: "Open twitter account of the developer",
      linkTitle: "Twitter Account Link",
      icon: TwitterIcon,
      iconAlt: "Twitter link icon",
      iconTitle: "Twitter icon",
    },
    {
      href: "https://github.com/alexmihale",
      linkAlt: "Open github account of the developer",
      linkTitle: "Github Account Link",
      icon: GithubIcon,
      iconAlt: "Github link icon",
      iconTitle: "GitHub icon",
    },
    {
      href: "https://www.linkedin.com/in/andrei-mihale/",
      linkAlt: "Open linkedin account of the developer",
      linkTitle: "Linkedin Account Link",
      icon: LinkedinIcon,
      iconAlt: "Twitter link icon",
      iconTitle: "Linkedin icon",
    },
  ];
  return (
    <footer className="footer">
      <div className="footer__text">Connect with Me ♥</div>
      <div className="footer__links">
        {socialIcons.map((socialIcon) => (
          <SocialLink
            key={socialIcon.href}
            href={socialIcon.href}
            linkAlt={socialIcon.linkAlt}
            linkTitle={socialIcon.linkTitle}
            icon={socialIcon.icon}
            iconAlt={socialIcon.iconAlt}
            iconTitle={socialIcon.iconTitle}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
