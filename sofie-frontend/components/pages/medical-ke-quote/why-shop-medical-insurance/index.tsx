import React, { useState } from "react";
import { Check } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../../../redux/reducers/main";
import { setFormDataInfo } from "../../../../redux/actions/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import Radio from "../../../ui-components/radio";
import { RadioItemType } from "../../../basic-ui/radio-item";
import styles from "./styles.module.scss";

const radios: RadioItemType[] = [
  {
    keyboard: "A",
    label: "I wasn't required to have insurance",
    value: "I wasn't required to have insurance",
  },
  {
    keyboard: "B",
    label: "It ended in the last 31 days",
    value: "It ended in the last 31 days",
  },
  {
    keyboard: "C",
    label: "My policy lapsed",
    value: "My policy lapsed",
  },
  {
    keyboard: "D",
    label: "Other",
    value: "Other",
  },
];

const WhyShopMedicalInsurance = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.why_shop_medical_insurance;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          why_shop_medical_insurance: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="Why are you shopping for insurance today?*"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="4"
      downButtonDisable={downButtonDisable}
      setDownButtonDisable={setDownButtonDisable}
      formData={formData}
      submitFunction={submitFunction}
    >
      <div className={styles.wrapper}>
        <Radio radios={radios} selectedItem={formData} setSelectedItem={setFormData} />
      </div>
    </ContentWrapper>
  );
};

export default WhyShopMedicalInsurance;
