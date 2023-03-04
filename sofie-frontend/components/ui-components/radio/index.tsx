import React from "react";

import { RadioItemType } from "./../../basic-ui/radio-item";
import RadioItem from "./../../basic-ui/radio-item";
import styles from "./styles.module.scss";

type RadioProps = {
  radios: RadioItemType[];
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
};

const Radio: React.FC<RadioProps> = ({ radios, selectedItem, setSelectedItem }) => {
  return (
    <div className={styles.wrapper}>
      {radios.map((item: RadioItemType) => (
        <RadioItem key={item.label} redioItem={item} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      ))}
    </div>
  );
};

export default Radio;
