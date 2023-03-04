import React from "react";
import { Check } from "lucide-react";
import classnames from "classnames";

import styles from "./styles.module.scss";

export type CheckboxItemType = {
  keyboard: string;
  label: string;
  value: string;
};

type CheckboxItemProps = {
  checkboxItem: CheckboxItemType;
  selectedItems: any;
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
};

const CheckboxItem: React.FC<CheckboxItemProps> = ({ checkboxItem, selectedItems = [], setSelectedItems }) => {
  return (
    <button
      className={styles.wrapper}
      onClick={() => {
        selectedItems.find((item: Object) => item == checkboxItem.value)
          ? setSelectedItems((selectedItems = selectedItems.filter((item: Object) => item !== checkboxItem.value)))
          : setSelectedItems((selectedItems = [...selectedItems, checkboxItem.value]));
      }}
    >
      <div>
        <span
          className={classnames(styles.keyboard, {
            [styles.selected]: selectedItems.find((item: Object) => item === checkboxItem.value),
          })}
        >
          {checkboxItem.keyboard}
        </span>
        <span>{checkboxItem.label}</span>
      </div>
      {selectedItems.find((item: Object) => item === checkboxItem.value) && <Check className={styles.icon} size={16} />}
    </button>
  );
};

export default CheckboxItem;
