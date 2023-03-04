import React from "react";

import styles from "./styles.module.scss";

type SimpleCheckboxProps = {
  label: string;
  id: string;
};

const SimpleCheckbox: React.FC<SimpleCheckboxProps> = ({ label = "", id = "" }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.input}>
        <input
          id={id}
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
        />
      </div>
      <div className={styles.label}>
        <label htmlFor={id} className="font-medium text-gray-700">
          {label}
        </label>
      </div>
    </div>
  );
};

export default SimpleCheckbox;
