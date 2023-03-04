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
  { keyboard: "Y", label: "Yes", value: "Yes" },
  { keyboard: "N", label: "No", value: "No" },
];

const HaveCarInsurance = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.have_car_insurance;
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const [formData, setFormData] = useState<string>(selected);
  const dispatch: any = useDispatch();
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          have_car_insurance: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="Do you currently have car insurance?*"
      description={`Select "Yes" if you have active car insurance as of today.`}
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="2"
      formData={formData}
      downButtonDisable={downButtonDisable}
      setDownButtonDisable={setDownButtonDisable}
      upButtonDisable={true}
      submitFunction={submitFunction}
    >
      <div className={styles.wrapper}>
        <Radio radios={radios} selectedItem={formData} setSelectedItem={setFormData} />
      </div>
    </ContentWrapper>
  );
};

export default HaveCarInsurance;
