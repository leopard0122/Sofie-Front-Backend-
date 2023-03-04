import React from "react";

import { useDispatch } from "react-redux";
import { setPageInfo } from "./../../redux/actions/main";

import Text from "../../components/basic-ui/text";
import styles from "./styles.module.scss";

const Header = () => {
  const dispatch: any = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.content}
        onClick={() => {
          dispatch(
            setPageInfo({
              currentPage: "0",
              prevPages: [],
            })
          );
        }}
      >
        <Text size="base">SOFIE</Text>
      </div>
    </div>
  );
};

export default Header;
