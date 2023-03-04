import React from "react";
import { Check } from "lucide-react";
import classnames from "classnames";

import Image from "./../../basic-ui/Image";
import styles from "./styles.module.scss";

type EmojiRadioItemProps = {
  keyboard: string;
  label: string;
  value: string;
  url: string;
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
};

const EmojiRadioItem: React.FC<EmojiRadioItemProps> = ({
  keyboard = "",
  label = "",
  value,
  url,
  selectedItem,
  setSelectedItem,
}) => {
  return (
    <button
      className={styles.wrapper}
      onClick={() => {
        setSelectedItem(value);
      }}
    >
      <div>
        <Image
          layout="responsive"
          image={{
            title: "default",
            url: `${url}`,
            width: 500,
            height: 500,
          }}
        />
        <span
          className={classnames(styles.keyboard, {
            [styles.selected]: selectedItem === value,
          })}
        >
          {keyboard}
        </span>
        <span>{label}</span>
      </div>
      {selectedItem === value && <Check className={styles.icon} size={20} />}
    </button>
  );
};

export default EmojiRadioItem;
