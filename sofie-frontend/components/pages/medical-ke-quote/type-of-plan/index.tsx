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
  {
    keyboard: "A",
    label: "Inpatient, Hospitalization/Day-Patient Benefit",
    value: "Inpatient, Hospitalization/Day-Patient Benefit",
  },
  {
    keyboard: "B",
    label: "Inpatient & Outpatient Benefit",
    value: "Inpatient & Outpatient Benefit",
  },
  {
    keyboard: "C",
    label: "Evacuation & Repatriation",
    value: "Evacuation & Repatriation",
  },
];

const TypeOfPlan = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.type_of_plan;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          type_of_plan: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="What type of plan are you interested in?*"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="15"
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

export default TypeOfPlan;
