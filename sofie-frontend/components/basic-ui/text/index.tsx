import React from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";

type TextProps = {
  children?: React.ReactNode;
  size?: string;
};

const Text: React.FC<TextProps> = ({ children, size = "sm" }) => {
  return (
    <span
      className={classnames(styles.base, {
        [styles.xs]: size === "xs",
        [styles.sm]: size === "sm",
        [styles.md]: size === "base",
        [styles.lg]: size === "lg",
        [styles.xl]: size === "xl",
        [styles.xxl]: size === "xxl",
      })}
    >
      {children}
    </span>
  );
};

export default Text;
