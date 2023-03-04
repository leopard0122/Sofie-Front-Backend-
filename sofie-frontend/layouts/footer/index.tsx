import React from "react";

import Container from "../container";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.text}>
          By clicking “Yes, let’s start” you consent to Sofie saving the information you entered and sharing it with
          insurance carriers and other partners so you can get the most up-to-date quotes, no matter what device you’re
          using. Additionally, carriers and insurance professionals may use this to obtain information about your credit
          history. You also agree to Sofies’s Privacy Policy and Terms of Service.
        </div>
      </Container>
    </div>
  );
};

export default Footer;
