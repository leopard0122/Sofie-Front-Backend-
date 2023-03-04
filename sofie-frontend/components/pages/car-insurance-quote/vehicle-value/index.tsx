import React, { useState } from "react";
import { Check } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { setTempFormDataInfo } from "../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import UnderlineInput from "../../../basic-ui/underline-input";
import styles from "./styles.module.scss";

const VehicleValue = () => {
  const main = useSelector((state: { main: StateType }) => state.main);
  const currentPage = main.currentPage;
  const time = main.prevPages.filter((item) => item === currentPage).length;
  const vehicle = main.formData?.[`vehicle_${time}`];
  const dispatch: any = useDispatch();
  const selected = vehicle ? vehicle.vehicle_value : main.tempFormData?.vehicle_value;
  const vehicle_brand = vehicle ? vehicle.vehicle_brand : main.tempFormData?.vehicle_brand;
  const vehicle_year = vehicle ? vehicle.vehicle_year : main.tempFormData?.vehicle_year;
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setTempFormDataInfo({
        tempFormData: {
          vehicle_value: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title={`Enter value of ${vehicle_brand}, ${vehicle_year} *`}
      description="Value in KES"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="11"
      downButtonDisable={downButtonDisable}
      setDownButtonDisable={setDownButtonDisable}
      formData={formData}
      submitFunction={submitFunction}
    >
      <div className={styles.wrapper}>
        <UnderlineInput
          regEx={/^[0-9]*$/}
          placeholder="Type your answer here..."
          formData={formData}
          setFormData={setFormData}
        />
      </div>
    </ContentWrapper>
  );
};

export default VehicleValue;
