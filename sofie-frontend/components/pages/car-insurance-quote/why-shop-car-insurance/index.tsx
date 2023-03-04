import React, { useState } from "react";
import { Check } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../../../redux/reducers/main";
import { setFormDataInfo } from "../../../../redux/actions/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import Radio from "../../../ui-components/radio";
import { RadioItemType } from "../../../basic-ui/radio-item";
import styles from "./styles.module.scss";

const CarInsuranceReasonForExistRadios: RadioItemType[] = [
  {
    keyboard: "A",
    label: "I think I'm paying too much",
    value: "I think I'm paying too much",
  },
  {
    keyboard: "B",
    label: "I'm buying a car soon",
    value: "I'm buying a car soon",
  },
  {
    keyboard: "C",
    label: "A life event affected my policy",
    value: "A life event affected my policy",
  },
  {
    keyboard: "D",
    label: "I'm just looking at my options",
    value: "I'm just looking at my options",
  },
];

const CarInsuranceReasonForNoExistRadios: RadioItemType[] = [
  {
    keyboard: "A",
    label: "I need car insurance now",
    value: "I need car insurance now",
  },
  {
    keyboard: "B",
    label: "I'm buying a car soon",
    value: "I'm buying a car soon",
  },
  {
    keyboard: "C",
    label: "I'm just looking at my options",
    value: "I'm just looking at my options",
  },
];

const WhyShopCarInsurance = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.why_shop_car_insurance;
  const formDataInfo = useSelector((state: { main: StateType }) => state.main.formData.have_car_insurance);
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          why_shop_car_insurance: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="Why are you shopping for insurance today?*"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage={formDataInfo === "Yes" ? "4" : "3"}
      downButtonDisable={downButtonDisable}
      setDownButtonDisable={setDownButtonDisable}
      formData={formData}
      submitFunction={submitFunction}
    >
      <div className={styles.wrapper}>
        <Radio
          radios={formDataInfo === "Yes" ? CarInsuranceReasonForExistRadios : CarInsuranceReasonForNoExistRadios}
          selectedItem={formData}
          setSelectedItem={setFormData}
        />
      </div>
    </ContentWrapper>
  );
};

export default WhyShopCarInsurance;
