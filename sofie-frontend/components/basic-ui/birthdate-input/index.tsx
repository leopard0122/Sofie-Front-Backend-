import React, { useEffect, useState } from "react";
import moment from "moment";

import styles from "./styles.module.scss";

type DateInputProps = {
  formData: string;
  setFormData: React.Dispatch<React.SetStateAction<string>>;
};

const BirthdateInput: React.FC<DateInputProps> = ({ formData, setFormData }) => {
  const [error, setError] = useState<boolean>(false);
  const [defaultValue, setDefaultValue] = useState<any>();

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let { value } = event.target;
    if (new Date(value) <= new Date()) {
      setFormData(moment(value).format("MM/DD/YYYY"));
      setError(false);
    } else {
      setFormData("");
      setError(true);
    }
  };

  useEffect(() => {
    if (formData) {
      setDefaultValue(moment(formData).format("YYYY-MM-DD"));
    }
  }, [formData]);

  return (
    <div className={styles.wrapper}>
      <input className={styles.input} type="date" defaultValue={defaultValue} onChange={onInputChange} />
      {error && <p className={styles.error}>{`You can't input future dates.`}</p>}
    </div>
  );
};

export default BirthdateInput;
