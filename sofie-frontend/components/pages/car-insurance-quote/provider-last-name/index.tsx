import React, { useState } from "react";
import { Check } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { setTempFormDataInfo } from "../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import UnderlineInput from "../../../basic-ui/underline-input";
import styles from "./styles.module.scss";

const ProviderLastName = () => {
  const main = useSelector((state: { main: StateType }) => state.main);
  const currentPage = main.currentPage;
  const time = main.prevPages.filter((item) => item === currentPage).length;
  const driver = main.formData?.[`driver_${time}`];
  const selected = driver ? driver.provider_last_name : main.tempFormData?.provider_last_name;
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const dispatch: any = useDispatch();
  const submitFunction = () => {
    dispatch(
      setTempFormDataInfo({
        tempFormData: {
          provider_last_name: formData,
        },
      })
    );
  };

  let times = "First";
  switch (time) {
    case 1:
      times = "Second";
      break;
    case 2:
      times = "Last";
      break;
    default:
      break;
  }

  return (
    <ContentWrapper
      title="What's their last name?*"
      description={`${times} driver, tell us a little about them`}
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="19"
      downButtonDisable={downButtonDisable}
      setDownButtonDisable={setDownButtonDisable}
      formData={formData}
      submitFunction={submitFunction}
    >
      <div className={styles.wrapper}>
        <UnderlineInput
          regEx={/^[A-Za-z]*$/}
          placeholder="Type your answer here..."
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </ContentWrapper>
  );
};

export default ProviderLastName;
