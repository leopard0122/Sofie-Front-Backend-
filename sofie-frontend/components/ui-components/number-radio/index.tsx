import React from "react";

import NumberRadioItem from "../../basic-ui/number-radio-item";
import styles from "./styles.module.scss";

export type NumberRadioItemType = {
  keyboard: string;
  label: string;
  value: string;
};

type NumberRadioProps = {
  radios: NumberRadioItemType[];
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
};

const Radio: React.FC<NumberRadioProps> = ({ radios, selectedItem, setSelectedItem }) => {
  return (
    <div className={styles.wrapper}>
      {radios.map((item: NumberRadioItemType) => (
        <NumberRadioItem
          key={item.label}
          label={item.label}
          keyboard={item.keyboard}
          value={item.value}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      ))}
    </div>
  );
};

export default Radio;
