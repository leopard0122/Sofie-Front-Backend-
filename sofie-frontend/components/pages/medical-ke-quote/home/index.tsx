import React from "react";

import { useDispatch } from "react-redux";
import { setPageInfo } from "../../../../redux/actions/main";

import Footer from "./../../../../layouts/footer/index";
import SimpleButton from "../../../basic-ui/simple-button";
import Text from "../../../basic-ui/text";
import Image from "../../../basic-ui/Image";
import styles from "./styles.module.scss";

const Home = () => {
  const dispatch: any = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.body}>
          <div>
            <Text size="xl">FREE Medical Insurance Quote For You</Text>
          </div>
          <div>
            <Text size="base">
              Sofie will help you find the right medical insurance, for free. It’s quick and easy and means you are
              protected financially if anything happened to you.
            </Text>
          </div>
          <div className={styles.buttonDiv}>
            <SimpleButton
              bgColor="primary"
              label="Let's start"
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
                url: "/image/default.png",
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
