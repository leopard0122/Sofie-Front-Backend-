import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../../../redux/reducers/main";
import { setFormDataInfo } from "../../../../redux/actions/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import Radio from "../../../ui-components/radio";
import { RadioItemType } from "../../../basic-ui/radio-item";
import styles from "./styles.module.scss";

const radios: RadioItemType[] = [
  {
    keyboard: "A",
    label: "I think I'm paying too much",
    value: "I think I'm paying too much",
  },
  {
    keyboard: "B",
    label: "I'm interested in life insurance soon",
    value: "I'm interested in life insurance soon",
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

const WhyShopLifeInsurance = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.why_shop_life_insurance;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          why_shop_life_insurance: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="Why are you shopping for insurance today?*"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="4"
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

export default WhyShopLifeInsurance;
