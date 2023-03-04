import React from "react";

import { useDispatch } from "react-redux";
import { setPageInfo } from "./../../../../redux/actions/main";

import Footer from "../../../../layouts/footer";
import SimpleButton from "../../../basic-ui/simple-button";
import Text from "../../../basic-ui/text";
import Image from "./../../../basic-ui/Image";
import styles from "./styles.module.scss";

const Home = () => {
  const dispatch: any = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.body}>
          <div>
            <Text size="xl">Want to save on your car insurance?</Text>
          </div>
          <div>
            <Text size="base">
              Hey! Sofie is your FREE financial assistant, helping you find the right car insurance provider that fits
              your needs at the best market price.
            </Text>
          </div>
          <div className={styles.buttonDiv}>
            <SimpleButton
              bgColor="primary"
              label="Show me how"
              onClick={() => {
                dispatch(
                  setPageInfo({
                    currentPage: "1",
                    prevPages: [],
                  })
                );
              }}
            />
          </div>
        </div>
        <div className={styles.animatedMediaWrapper}>
          <div className={styles.image}>
            <Image
              layout="responsive"
              image={{
                title: "default",
                url: "/image/default-firstframe.png",
                width: 500,
                height: 500,
              }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
