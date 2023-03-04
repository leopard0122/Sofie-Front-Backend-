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

const AddVehicle = () => {
  const main = useSelector((state: { main: StateType }) => state.main);
  const selected = main.formData?.add_vehicle;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          add_vehicle: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="Need to add another vehicle?*"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage={formData === "Yes" ? "7" : main.formData.have_car_insurance === "Yes" ? "15" : "16"}
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

export default AddVehicle;
