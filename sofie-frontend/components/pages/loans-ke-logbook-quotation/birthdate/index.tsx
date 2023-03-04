import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { setFormDataInfo } from "../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import DateInput from "../../../basic-ui/birthdate-input";
import styles from "./styles.module.scss";

const Birthdate = () => {
  const main = useSelector((state: { main: StateType }) => state.main);
  const selected = main.formData?.birthdate;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string>("");
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          birthdate: formData,
        },
      })
    );
  };

  useEffect(() => {
    if (selected) {
      setFormData(selected);
      setDownButtonDisable(false);
    } else {
      setDownButtonDisable(true);
    }
  }, [selected]);

  return (
    <ContentWrapper
      title="What's your Birthdate?*"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="4"
      formData={formData}
      downButtonDisable={downButtonDisable}
      setDownButtonDisable={setDownButtonDisable}
      submitFunction={submitFunction}
    >
      <div className={styles.wrapper}>
        <DateInput formData={formData} setFormData={setFormData} />
      </div>
    </ContentWrapper>
  );
};

export default Birthdate;
