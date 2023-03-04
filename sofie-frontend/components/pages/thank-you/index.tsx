import React from "react";

import Image from "../../basic-ui/Image";
import Text from "../../basic-ui/text";
import styles from "./styles.module.scss";

const ThankYou = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageDiv}>
        <Image
          layout="responsive"
          image={{
            title: "default",
            url: "/image/icon-thank-you-lead-page.webp",
            width: 500,
            height: 500,
          }}
        />
      </div>
      <div>
        <Text size="xxl">
          That&apos;s it from us! We&apos;ll be in touch within 24 hours with your personalized quotes
        </Text>
      </div>
    </div>
  );
};

export default ThankYou;
