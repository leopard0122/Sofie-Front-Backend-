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
  { keyboard: "A", label: "Worldwide", value: "Worldwide" },
  {
    keyboard: "B",
    label: "Worldwide excluding USA",
    value: "Worldwide excluding USA",
  },
  {
    keyboard: "C",
    label: "Regional - Africa, India, Pakistan, Bangladesh, Sri Lanka",
    value: "Regional - Africa, India, Pakistan, Bangladesh, Sri Lanka",
  },
];

const WhereCoveredInterestedIn = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.where_covered_interested_in;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          where_covered_interested_in: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="Where do you want to be covered are you interested in?*"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="14"
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

export default WhereCoveredInterestedIn;
