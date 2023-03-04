import React, { useState } from "react";
import { Check } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../../../redux/reducers/main";
import { setFormDataInfo } from "./../../../../redux/actions/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import UnderlineInput from "../../../basic-ui/underline-input";
import styles from "./styles.module.scss";

const VehicleModel = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.vehicle_model;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          vehicle_model: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="Enter vehicle model. *"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="25"
      formData={formData}
      downButtonDisable={downButtonDisable}
      setDownButtonDisable={setDownButtonDisable}
      submitFunction={submitFunction}
    >
      <div className={styles.wrapper}>
        <UnderlineInput placeholder="Type your answer here..." formData={formData} setFormData={setFormData} />
      </div>
    </ContentWrapper>
  );
};

export default VehicleModel;
