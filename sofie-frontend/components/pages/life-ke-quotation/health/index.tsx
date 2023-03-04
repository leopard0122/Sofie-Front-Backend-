import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { setFormDataInfo } from "../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import Radio from "../../../ui-components/radio";
import { RadioItemType } from "../../../basic-ui/radio-item";
import styles from "./styles.module.scss";

const radios: RadioItemType[] = [
  { keyboard: "A", label: "Average", value: "Average" },
  { keyboard: "B", label: "Good", value: "Good" },
  { keyboard: "C", label: "Excellent", value: "Excellent" },
];

const Health = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.health;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          health: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="How is your health?*"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="9"
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

export default Health;
