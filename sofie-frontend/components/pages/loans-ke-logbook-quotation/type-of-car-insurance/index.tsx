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
  {
    keyboard: "A",
    label: "Comprehensive Insurance",
    value: "Comprehensive Insurance",
  },
  {
    keyboard: "B",
    label: "Third-Party Insurance",
    value: "Third-Party Insurance",
  },
];

const TypeOfCarInsurance = () => {
  const main = useSelector((state: { main: StateType }) => state.main);
  const selected = main.formData?.type_of_car_insurance;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          type_of_car_insurance: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title={`What type of car insurance is on ${main.formData.vehicle_brand} - ${main.formData.vehicle_year}?*`}
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="28"
      downButtonDisable={downButtonDisable}
      setDownButtonDisable={setDownButtonDisable}
      submitFunction={submitFunction}
      formData={formData}
    >
      <div className={styles.wrapper}>
        <Radio radios={radios} selectedItem={formData} setSelectedItem={setFormData} />
      </div>
    </ContentWrapper>
  );
};

export default TypeOfCarInsurance;
