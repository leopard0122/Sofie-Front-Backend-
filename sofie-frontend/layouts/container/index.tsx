import React from "react";

import styles from "./styles.module.scss";

type Props = {
  children: JSX.Element;
};

const Container = ({ children }: Props) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Container;
