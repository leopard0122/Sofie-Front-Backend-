import React, { useState } from "react";
import { Check } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { setFormDataInfo } from "../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import UnderlineInput from "../../../basic-ui/underline-input";
import styles from "./styles.module.scss";

const VehicleProvidingGuarantee = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.vehicle_providing_guarantee;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          vehicle_providing_guarantee: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="Whose vehicle are you providing as a guarantee?*"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="20"
      downButtonDisable={downButtonDisable}
      setDownButtonDisable={setDownButtonDisable}
      formData={formData}
      submitFunction={submitFunction}
    >
      <div className={styles.wrapper}>
        <UnderlineInput placeholder="Type your answer here..." formData={formData} setFormData={setFormData} />
      </div>
    </ContentWrapper>
  );
};

export default VehicleProvidingGuarantee;
