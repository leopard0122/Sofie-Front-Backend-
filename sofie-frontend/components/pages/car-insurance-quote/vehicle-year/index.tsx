import React, { useState } from "react";
import { Check } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { StateType } from "../../../../redux/reducers/main";
import { setTempFormDataInfo } from "./../../../../redux/actions/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import Select from "../../../basic-ui/select";
import { years } from "../../../../constant/years";
import styles from "./styles.module.scss";

export type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = years.map((item: string) => ({
  value: item,
  label: item,
}));

const VehicleYear = () => {
  const main = useSelector((state: { main: StateType }) => state.main);
  const currentPage = main.currentPage;
  const time = main.prevPages.filter((item) => item === currentPage).length;
  const vehicle = main.formData?.[`vehicle_${time}`];
  const selected = vehicle ? vehicle.vehicle_year : main.tempFormData?.vehicle_year;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<OptionType | undefined>({
    value: selected,
    label: selected,
  });
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setTempFormDataInfo({
        tempFormData: {
          vehicle_year: formData?.value,
        },
      })
    );
  };

  let times = "first";
  switch (time) {
    case 1:
      times = "second";
      break;
    case 2:
      times = "third";
      break;
    case 3:
      times = "last";
      break;
    default:
      break;
  }

  return (
    <ContentWrapper
      title={`Let's add your ${times} vehicle, ${main.formData.first_name}.`}
      description="Select vehicle year. *"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="8"
      downButtonDisable={downButtonDisable}
      setDownButtonDisable={setDownButtonDisable}
      formData={formData?.value}
      submitFunction={submitFunction}
    >
      <div className={styles.wrapper}>
        <Select options={options} formData={formData} setFormData={setFormData} />
      </div>
    </ContentWrapper>
  );
};

export default VehicleYear;
