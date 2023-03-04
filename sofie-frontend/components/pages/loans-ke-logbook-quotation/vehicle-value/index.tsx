import React, { useState } from "react";
import { Check } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { setFormDataInfo } from "../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import UnderlineInput from "../../../basic-ui/underline-input";
import styles from "./styles.module.scss";

const VehicleValue = () => {
  const main = useSelector((state: { main: StateType }) => state.main);
  const selected = main.formData?.vehicle_value;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          vehicle_value: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title={`Enter value of ${main.formData.vehicle_brand}, ${main.formData.vehicle_year} *`}
      description="Value in KES"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="26"
      downButtonDisable={downButtonDisable}
      setDownButtonDisable={setDownButtonDisable}
      formData={formData}
      submitFunction={submitFunction}
    >
      <div className={styles.wrapper}>
        <UnderlineInput
          regEx={/^[0-9]*$/}
          placeholder="Type your answer here..."
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </ContentWrapper>
  );
};

export default VehicleValue;
