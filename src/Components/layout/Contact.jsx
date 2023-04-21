import React from "react";
import Metadata from "./Metadata";
import { Button } from "@material-ui/core";
import "../../Styles/Contact.scss";

const Contact = () => {
  return (
    <>
      <Metadata title={"Contact - Ecommerce"} />
      <div className="contactContainer">
        <a className="mailBtn" href="mailto:mr.shashankkumar.alld57@gmail.com">
          <Button>Contact: mr.shashankkumar.alld57@gmail.com</Button>
        </a>
      </div>
    </>
  );
};

export default Contact;
