import React from "react";
import Metadata from "./Metadata";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedinIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../../Styles/About.scss";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://shashankcv.netlify.app/";
  };

  return (
    <>
      <Metadata title={"About - Ecommerce"} />
      <div className="aboutSection">
        <div></div>
        <div className="aboutSectionGradient"></div>
        <div className="aboutSectionContainer">
          <Typography component={"h1"}>About Us</Typography>
          <div>
            <div>
              <Avatar
                style={{
                  width: "11vmax",
                  height: "13vmax",
                  margin: "2vmax 0",
                }}
                src="https://res.cloudinary.com/dwnapkoae/image/upload/v1681921024/myPhotos/sketch-removebg-preview_wpyuuj.png"
                alt="Founder"
              />
              <Typography>Shashank Kumar</Typography>
              <Button onClick={visitInstagram} color="primary">
                Visit Portfolio
              </Button>
              <span>
                This is a MERN project Ecommerce website made by @Shashankkumar.
                Only with the purpose of learning mern stack and implementing
                the same.
                <br />
                Please don't fill private or sensative information here.
              </span>
            </div>
            <div className="aboutSectionContainer2">
              <Typography component={"h2"}>Our Brands</Typography>
              <a
                href="https://www.linkedin.com/in/shashankkumar27/"
                target="blank"
              >
                <LinkedinIcon className="youtubeSvgIcon" />
              </a>

              <a href="https://github.com/shashankkumar027/" target="blank">
                <GithubIcon className="instagramSvgIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
