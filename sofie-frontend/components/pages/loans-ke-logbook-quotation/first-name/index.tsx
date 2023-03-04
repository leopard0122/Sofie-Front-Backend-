import React, { useState } from "react";
import { Check } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { setFormDataInfo } from "../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import UnderlineInput from "../../../basic-ui/underline-input";
import styles from "./styles.module.scss";

const FirstName = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.first_name;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);

  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          first_name: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="What's your First name?*"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="2"
      formData={formData}
      upButtonDisable={true}
      downButtonDisable={downButtonDisable}
      setDownButtonDisable={setDownButtonDisable}
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

export default FirstName;
