import React, { useState } from "react";
import { Check } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { setTempFormDataInfo } from "../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import Radio from "../../../ui-components/radio";
import { RadioItemType } from "../../../basic-ui/radio-item";
import styles from "./styles.module.scss";

const radios: RadioItemType[] = [
  { keyboard: "A", label: "Personal/commuting", value: "Personal/commuting" },
  { keyboard: "B", label: "Pleasure", value: "Pleasure" },
  { keyboard: "C", label: "Farm", value: "Farm" },
  { keyboard: "D", label: "Business/rideshare", value: "Business/rideshare" },
];

const VehiclePurpose = () => {
  const main = useSelector((state: { main: StateType }) => state.main);
  const currentPage = main.currentPage;
  const time = main.prevPages.filter((item) => item === currentPage).length;
  const vehicle = main.formData?.[`vehicle_${time}`];
  const selected = vehicle ? vehicle.vehicle_purpose : main.tempFormData?.vehicle_purpose;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setTempFormDataInfo({
        tempFormData: {
          vehicle_purpose: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="What do you mostly use it for?*"
      description={`Most drivers choose "Personal/commuting"`}
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="13"
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

export default VehiclePurpose;
