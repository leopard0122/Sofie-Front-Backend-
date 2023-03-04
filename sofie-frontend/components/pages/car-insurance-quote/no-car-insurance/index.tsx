import React, { useState } from "react";
import { Check } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { setFormDataInfo } from "../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import Radio from "../../../ui-components/radio";
import { RadioItemType } from "../../../basic-ui/radio-item";
import styles from "./styles.module.scss";

const radios: RadioItemType[] = [
  {
    keyboard: "A",
    label: "I've been deployed overseas",
    value: "I've been deployed overseas",
  },
  {
    keyboard: "B",
    label: "I wasn't required to have insurance",
    value: "I wasn't required to have insurance",
  },
  {
    keyboard: "C",
    label: "It ended in the last 31 days",
    value: "It ended in the last 31 days",
  },
  { keyboard: "D", label: "My policy lapsed", value: "My policy lapsed" },
];

const NoCarInsurance = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.no_car_insurance;
  const dispatch: any = useDispatch();
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const [formData, setFormData] = useState<string>(selected);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          no_car_insurance: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="Why don’t you have insurance?*"
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

export default NoCarInsurance;
