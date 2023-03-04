import React, { useEffect } from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";

type NumberRadioItemProps = {
  keyboard: string;
  label: string;
  value: string;
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
};

const RadioItem: React.FC<NumberRadioItemProps> = ({ keyboard, label = "", value, selectedItem, setSelectedItem }) => {
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.key === keyboard.toLowerCase()) {
        setSelectedItem(value);
      }
    });
  }, []);

  return (
    <button
      className={classnames(styles.wrapper, {
        [styles.selected]: selectedItem === value,
      })}
      onClick={() => {
        setSelectedItem(value);
      }}
    >
      <div>
        <span>{label}</span>
      </div>
    </button>
  );
};

export default RadioItem;
