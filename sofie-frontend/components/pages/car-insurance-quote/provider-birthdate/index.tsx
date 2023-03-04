import React, { useState } from "react";
import { Check } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../../../redux/reducers/main";
import { setTempFormDataInfo } from "./../../../../redux/actions/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import DateInput from "../../../basic-ui/birthdate-input";
import styles from "./styles.module.scss";

const ProviderBirthdate = () => {
  const main = useSelector((state: { main: StateType }) => state.main);
  const currentPage = main.currentPage;
  const time = main.prevPages.filter((item) => item === currentPage).length;
  const driver = main.formData?.[`driver_${time}`];
  const selected = driver ? driver.provider_birthdate : main.tempFormData?.provider_birthdate;
  const provider_first_name = driver ? driver.provider_first_name : main.tempFormData?.provider_first_name;
  const provider_last_name = driver ? driver.provider_last_name : main.tempFormData?.provider_last_name;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setTempFormDataInfo({
        tempFormData: {
          provider_birthdate: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title={`What's ${provider_first_name} ${provider_last_name} Birthdate?*`}
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="20"
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

export default ProviderBirthdate;
