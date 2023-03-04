import React, { useState } from "react";
import { Check } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { setFormDataInfo } from "../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import Radio from "../../../ui-components/radio";
import { RadioItemType } from "../../../basic-ui/radio-item";
import styles from "./styles.module.scss";

const radios: RadioItemType[] = [
  { keyboard: "A", label: "I'm ready today", value: "I'm ready today" },
  { keyboard: "B", label: "Within a week", value: "Within a week" },
  { keyboard: "C", label: "In a few months", value: "In a few months" },
  { keyboard: "D", label: "I'm not sure", value: "I'm not sure" },
];

const Page5 = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.when_covered_life_insurance;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          when_covered_life_insurance: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="When would you like to be covered by life insurance?*"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="6"
      formData={formData}
      downButtonDisable={downButtonDisable}
      setDownButtonDisable={setDownButtonDisable}
      submitFunction={submitFunction}
    >
      <div className={styles.wrapper}>
        <Radio radios={radios} selectedItem={formData} setSelectedItem={setFormData} />
      </div>
    </ContentWrapper>
  );
};

export default Page5;
