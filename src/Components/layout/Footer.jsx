import React from "react";
import {
  AiFillYoutube,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import playStore from "../../images/playstore.png";
import appStore from "../../images/Appstore.png";
import "../../Styles/Footer.scss";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>Download Our App</h4>
        <p>Download App for Android and IOS devices</p>
        <img src={playStore} alt="playStore" />
        <img src={appStore} alt="appStore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>
        <p>Copyrights 2023 &copy;: All Rights Reserved.</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us:</h4>
        <a href="https://www.youtube.com/" target={"blank"}>
          <AiFillYoutube />
        </a>
        <a href="https://shashankcv.netlify.app/" target={"blank"}>
          <AiFillInstagram />
        </a>
        <a href="https://www.linkedin.com/in/shashankkumar27/" target={"blank"}>
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/shashankkumar027/" target={"blank"}>
          <AiFillGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
