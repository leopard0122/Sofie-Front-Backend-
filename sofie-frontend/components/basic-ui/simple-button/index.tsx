import React, { MouseEventHandler } from "react";
import { LucideProps } from "lucide-react";
import classnames from "classnames";

import styles from "./styles.module.scss";

type SimpleButtonProps = {
  label?: string;
  type?: "button" | "submit" | "reset";
  bgColor?: string;
  disable?: boolean;
  Icon?: any;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const SimpleButton: React.FC<SimpleButtonProps> = ({
  label = "",
  type = "button",
  bgColor = "black",
  disable = false,
  Icon,
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      className={classnames(
        styles.button,
        {
          [styles.black]: bgColor === "black",
          [styles.primary]: bgColor === "primary",
          [styles.yellow]: bgColor === "yellow",
        },
        { [styles.disable]: disable },
        { [styles.label]: label }
      )}
      disabled={disable}
      onClick={onClick}
    >
      {label}
      {Icon && <Icon color="white" size={16} />}
    </button>
  );
};

export default SimpleButton;
