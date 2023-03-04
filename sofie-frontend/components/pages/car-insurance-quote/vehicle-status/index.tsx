import React, { useState } from "react";
import { Check } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../../../redux/reducers/main";
import { setTempFormDataInfo } from "./../../../../redux/actions/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import Radio from "../../../ui-components/radio";
import { RadioItemType } from "../../../basic-ui/radio-item";
import styles from "./styles.module.scss";

const radios: RadioItemType[] = [
  { keyboard: "A", label: "Own - paid in full", value: "Own - paid in full" },
  {
    keyboard: "B",
    label: "Own - making payments",
    value: "Own - making payments",
  },
  { keyboard: "C", label: "Lease", value: "Lease" },
];

const VehicleStatus = () => {
  const main = useSelector((state: { main: StateType }) => state.main);
  const currentPage = main.currentPage;
  const time = main.prevPages.filter((item) => item === currentPage).length;
  const vehicle = main.formData?.[`vehicle_${time}`];
  const selected = vehicle ? vehicle.vehicle_status : main.tempFormData?.vehicle_status;
  const vehicle_brand = vehicle ? vehicle.vehicle_brand : main.tempFormData?.vehicle_brand;
  const vehicle_year = vehicle ? vehicle.vehicle_year : main.tempFormData?.vehicle_year;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setTempFormDataInfo({
        tempFormData: {
          vehicle_status: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title={`Do you own or lease  ${vehicle_brand}, ${vehicle_year}?*`}
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="12"
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

export default VehicleStatus;
