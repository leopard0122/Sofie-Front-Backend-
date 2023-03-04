import React from "react";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/style.css";

type PhoneNumberInputProps = {
  formData: string | undefined;
  setFormData: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ formData, setFormData }) => {
  return <PhoneInput country={"us"} enableSearch={true} value={formData} onChange={setFormData} />;
};

export default PhoneNumberInput;
