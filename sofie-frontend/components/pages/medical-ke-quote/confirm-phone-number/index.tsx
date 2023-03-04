import React, { useState } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../../../redux/reducers/main";
import { setPageInfo } from "../../../../redux/actions/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import Radio from "../../../ui-components/radio";
import { RadioItemType } from "../../../basic-ui/radio-item";
import styles from "./styles.module.scss";

const radios: RadioItemType[] = [
  { keyboard: "Y", label: "Yes", value: "Yes" },
  { keyboard: "N", label: "No", value: "No" },
];

const ConfirmPhoneNumber = () => {
  const dispatch: any = useDispatch();
  const main = useSelector((state: { main: StateType }) => state.main);
  const selected = main.formData?.confirm_phone_number;
  const formDataInfo = main.formData;
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(true);
  const submitFunction = async () => {
    if (formData === "Yes") {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT_URL}/medical-ke-quote`, formDataInfo);

      if (res.data === "OK") {
        location.href = "medical-ke-lead-submission";
      }
    } else {
      dispatch(
        setPageInfo({
          currentPage: "18",
          prevPages: [...main.prevPages, main.currentPage],
        })
      );
    }
  };

  return (
    <ContentWrapper
      title={`${main.formData.first_name}, confirm your phone number: +${main.formData.phone_number} is correct?*`}
      buttonLabel="Submit"
      formData={formData}
      downButtonDisable={true}
      setDownButtonDisable={setDownButtonDisable}
      submitFunction={submitFunction}
      nextPage="19"
    >
      <div className={styles.wrapper}>
        <Radio radios={radios} selectedItem={formData} setSelectedItem={setFormData} />
      </div>
    </ContentWrapper>
  );
};

export default ConfirmPhoneNumber;
