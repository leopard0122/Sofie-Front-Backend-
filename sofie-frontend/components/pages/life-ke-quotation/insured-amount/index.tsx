import React, { useState } from "react";
import { Check } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { setFormDataInfo } from "../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import Select from "../../../basic-ui/select";
import styles from "./styles.module.scss";

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: "Over 5M+", label: "Over 5M+" },
  { value: "2,500,000 - 5,000,000", label: "2,500,000 - 5,000,000" },
  { value: "1,000,000 - 2,500,000", label: "1,000,000 - 2,500,000" },
  { value: "500,000 - 750,000", label: "500,000 - 750,000" },
  { value: "250,000 - 500,000", label: "250,000 - 500,000" },
  { value: "100,000 - 249,000", label: "100,000 - 249,000" },
  { value: "50,000 - 99,000", label: "50,000 - 99,000" },
  { value: "No, help me decide", label: "No, help me decide" },
];

const InsuredAmount = () => {
  const main = useSelector((state: { main: StateType }) => state.main);
  const selected = main.formData?.insured_amount;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<OptionType | undefined>({
    value: selected,
    label: selected,
  });
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = async () => {
    dispatch(
      setFormDataInfo({
        formData: {
          insured_amount: formData?.value,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="Please enter your insured amount (Minimum 50,000 USD to 6.5M USD)*"
      description="Lump sum payments that will be made to the selected beneficiary in case of death of the beneficiary"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="14"
      downButtonDisable={downButtonDisable}
      setDownButtonDisable={setDownButtonDisable}
      formData={formData}
      submitFunction={submitFunction}
    >
      <div className={styles.wrapper}>
        <Select options={options} formData={formData} setFormData={setFormData} />
      </div>
    </ContentWrapper>
  );
};

export default InsuredAmount;
