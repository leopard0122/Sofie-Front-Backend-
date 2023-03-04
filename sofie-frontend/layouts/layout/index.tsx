import React from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../redux/reducers/main";
import ProgressBar from "@ramonak/react-progress-bar";

import Header from "../../layouts/header/index";
import styles from "./styles.module.scss";

type Props = {
  totalPage: number;
  children: JSX.Element;
};

const Layout = ({ children, totalPage }: Props) => {
  const currentPage = useSelector((state: { main: StateType }) => state.main.currentPage);

  return (
    <div className={styles.wrapper}>
      <div className={styles.progressBar}>
        <ProgressBar
          completed={(parseInt(currentPage) / totalPage) * 100}
          bgColor="#6366F1"
          borderRadius="0"
          height="5px"
          isLabelVisible={false}
        />
      </div>
      <Header />
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Layout;
