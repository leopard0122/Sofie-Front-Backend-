import React, { useEffect } from "react";

import CheckboxItem, { CheckboxItemType } from "../../basic-ui/checkbox-item";
import styles from "./styles.module.scss";

type CheckboxProps = {
  checkboxes: CheckboxItemType[];
  selectedItems: string[];
  setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>;
};

const Checkbox: React.FC<CheckboxProps> = ({ checkboxes, selectedItems, setSelectedItems }) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const selectedItem: CheckboxItemType | undefined = checkboxes.find(
        (item: CheckboxItemType) => item.keyboard === event.key.toUpperCase()
      );

      if (selectedItem) {
        if (selectedItems?.find((item: string) => item === selectedItem.value)) {
          setSelectedItems(selectedItems?.filter((item: string) => item !== selectedItem.value));
        } else {
          setSelectedItems([...(selectedItems ?? []), selectedItem.value]);
        }
      }
    };
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [selectedItems]);

  return (
    <div className={styles.wrapper}>
      {checkboxes.map((checkbox: CheckboxItemType, index) => (
        <CheckboxItem
          key={index}
          checkboxItem={checkbox}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      ))}
    </div>
  );
};

export default Checkbox;
