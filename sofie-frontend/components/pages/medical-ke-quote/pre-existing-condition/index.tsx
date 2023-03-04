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
  { keyboard: "A", label: "Yes", value: "Yes" },
  { keyboard: "B", label: "No", value: "No" },
];

const PreExistingCondition = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.pre_existing_condition;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          pre_existing_condition: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="Do you have any pre-existing conditions?*"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="10"
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

export default PreExistingCondition;
