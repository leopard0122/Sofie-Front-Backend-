import React from "react";

import EmojiRadioItem from "../../basic-ui/emoji-radio-item";
import styles from "./styles.module.scss";

export type EmojiRadioItemType = {
  keyboard: string;
  label: string;
  value: string;
  url: string;
};

type EmojiRadioProps = {
  radios: EmojiRadioItemType[];
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
};

const EmojiRadio: React.FC<EmojiRadioProps> = ({ radios, selectedItem, setSelectedItem }) => {
  return (
    <div className={styles.wrapper}>
      {radios.map((item: EmojiRadioItemType) => (
        <EmojiRadioItem
          key={item.label}
          label={item.label}
          keyboard={item.keyboard}
          value={item.value}
          url={item.url}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      ))}
    </div>
  );
};

export default EmojiRadio;
