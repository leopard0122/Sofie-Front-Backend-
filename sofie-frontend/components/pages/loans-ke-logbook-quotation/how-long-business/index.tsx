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
  { value: "0 to 1 year", label: "0 to 1 year" },
  { value: "1 to 3 years", label: "1 to 3 years" },
  { value: "4 to 5 years", label: "4 to 5 years" },
  { value: "5 to 10 years", label: "5 to 10 years" },
  { value: "10 to 15 years", label: "10 to 15 years" },
  { value: "15+ years", label: "15+ years" },
];

const HowLongBusiness = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.how_long_business;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<OptionType | undefined>({
    value: selected,
    label: selected,
  });
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          how_long_business: formData?.value,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="How long have you been in business for?*"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="17"
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

export default HowLongBusiness;
