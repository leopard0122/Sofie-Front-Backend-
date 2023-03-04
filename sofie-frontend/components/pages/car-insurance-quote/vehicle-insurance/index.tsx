import React, { useState } from "react";
import { Check } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { setTempToForm } from "../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import Radio from "../../../ui-components/radio";
import { RadioItemType } from "../../../basic-ui/radio-item";
import styles from "./styles.module.scss";

const radios: RadioItemType[] = [
  { keyboard: "A", label: "Comprehensive", value: "Comprehensive" },
  { keyboard: "B", label: "Third-party", value: "Third-party" },
];

const VehicleInsurance = () => {
  const main = useSelector((state: { main: StateType }) => state.main);
  const currentPage = main.currentPage;
  const time = main.prevPages.filter((item) => item === currentPage).length;
  const vehicle = main.formData?.[`vehicle_${time}`];
  const selected = vehicle ? vehicle.vehicle_insurance : main.tempFormData?.vehicle_insurance;
  const vehicle_brand = vehicle ? vehicle.vehicle_brand : main.tempFormData?.vehicle_brand;
  const dispatch: any = useDispatch();
  const tempFormData = main.tempFormData;
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setTempToForm({
        fieldName: `vehicle_${time}`,
        data: { ...tempFormData, vehicle_insurance: formData },
      })
    );
  };

  return (
    <ContentWrapper
      title={`What type of Insurance are you interested in for the ${vehicle_brand}. *`}
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage={time < 3 ? "14" : main.formData.have_car_insurance === "Yes" ? "15" : "16"}
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

export default VehicleInsurance;
