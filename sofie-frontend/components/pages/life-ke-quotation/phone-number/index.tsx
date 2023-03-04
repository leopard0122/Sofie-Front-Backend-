import React, { useState } from "react";
import { Check } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { setFormDataInfo } from "../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import PhoneNumberInput from "../../../basic-ui/phone-number-input";
import ContentWrapper from "../../../../layouts/content-wrapper";
import styles from "./styles.module.scss";

const PhoneNumber = () => {
  const main = useSelector((state: { main: StateType }) => state.main);
  const selected = main.formData?.phone_number;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<any>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          phone_number: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title={`${main.formData.first_name}, last but not least, we just need your phone number. *`}
      description="This is for confirmation and basic contact. You won't get any spam."
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="18"
      formData={formData}
      downButtonDisable={downButtonDisable}
      setDownButtonDisable={setDownButtonDisable}
      submitFunction={submitFunction}
    >
      <div className={styles.wrapper}>
        <PhoneNumberInput formData={formData} setFormData={setFormData} />
      </div>
    </ContentWrapper>
  );
};

export default PhoneNumber;
