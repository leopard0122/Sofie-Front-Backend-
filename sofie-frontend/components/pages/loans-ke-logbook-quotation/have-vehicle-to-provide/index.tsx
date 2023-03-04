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
  { keyboard: "Y", label: "Yes", value: "Yes" },
  { keyboard: "N", label: "No", value: "No" },
];

const HaveVehicleToProvide = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.have_vehicle_to_provide;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          have_vehicle_to_provide: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="Do you have a vehicle to provide as a loan guarantee?*"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage={formData === "Yes" ? "18" : "29"}
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

export default HaveVehicleToProvide;
