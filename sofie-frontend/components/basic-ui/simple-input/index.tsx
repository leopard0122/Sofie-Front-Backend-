import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

import styles from "./styles.module.scss";

type SimpleInputProps = {
  register: UseFormRegister<FieldValues>;
  errors: any;
  type: string;
  placeholder: string;
  name: string;
};

const SimpleInput: React.FC<SimpleInputProps> = ({ register, errors, type = "text", placeholder = "", name = "" }) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type={type} placeholder={placeholder} {...register(name)} />
      <div className={styles.invalidFeedback}>{errors[name]?.message}</div>
    </div>
  );
};

export default SimpleInput;
