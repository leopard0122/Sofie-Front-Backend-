import React, { useEffect } from "react";
import { Check } from "lucide-react";
import classnames from "classnames";

import styles from "./styles.module.scss";

export type RadioItemType = {
  keyboard: string;
  label: string;
  value: string;
};

type RadioItemProps = {
  redioItem: RadioItemType;
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
};

const RadioItem: React.FC<RadioItemProps> = ({ redioItem, selectedItem, setSelectedItem }) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === redioItem.keyboard.toLowerCase()) {
        setSelectedItem(redioItem.value);
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [setSelectedItem]);

  return (
    <button
      className={styles.wrapper}
      onClick={() => {
        setSelectedItem(redioItem.value);
      }}
    >
      <div
        className={classnames(styles.keyboard, {
          [styles.selected]: selectedItem === redioItem.value,
        })}
      >
        {redioItem.keyboard}
      </div>
      <div className={styles.label}>{redioItem.label}</div>
      {selectedItem === redioItem.value && <Check className={styles.icon} size={16} />}
    </button>
  );
};

export default RadioItem;
