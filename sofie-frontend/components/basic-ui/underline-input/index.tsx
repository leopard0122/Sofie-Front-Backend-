import React from "react";

import styles from "./styles.module.scss";

type UnderlineInputProps = {
  type?: string;
  placeholder?: string;
  formData?: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  regEx?: RegExp | undefined;
};

const UnderlineInput: React.FC<UnderlineInputProps> = ({
  placeholder = "",
  type = "text",
  formData = "",
  setFormData,
  regEx,
}) => {
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (regEx) {
      if (regEx.test(value)) {
        setFormData(value);
      }
    } else {
      setFormData(value);
    }
  };

  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type={type} placeholder={placeholder} value={formData} onChange={onInputChange} />
    </div>
  );
};

export default UnderlineInput;
