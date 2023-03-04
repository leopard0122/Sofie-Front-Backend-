import React from "react";
import SelectInput from "react-select";

import styles from "./styles.module.scss";
import { OptionType } from "../../pages/car-insurance-quote/vehicle-year";

type OptionProps = {
  options: any;
  formData: OptionType | undefined;
  setFormData: any;
};

const Select: React.FC<OptionProps> = ({ options, formData, setFormData }) => {
  return (
    <div className={styles.wrapper}>
      <SelectInput
        placeholder="Select..."
        options={options}
        value={formData?.value ? formData : { value: "", label: "Select..." }}
        onChange={setFormData}
      />
    </div>
  );
};

export default Select;
