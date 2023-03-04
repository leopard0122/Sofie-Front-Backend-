import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { setFormDataInfo } from "../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import Radio from "../../../ui-components/radio";
import { RadioItemType } from "../../../basic-ui/radio-item";
import styles from "./styles.module.scss";

const radios: RadioItemType[] = [
  { keyboard: "A", label: "My vehicle", value: "My vehicle" },
  {
    keyboard: "B",
    label: "Someone else's vehicle",
    value: "Someone else's vehicle",
  },
];

const VehicleBeProvidingGuarantee = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.vehicle_be_providing_guarantee;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          vehicle_be_providing_guarantee: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="Whose vehicle will you be providing as a guarantee?*"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage={formData === "My vehicle" ? "22" : "19"}
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

export default VehicleBeProvidingGuarantee;
