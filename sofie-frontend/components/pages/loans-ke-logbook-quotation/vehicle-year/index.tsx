import React, { useState } from "react";
import { Check } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { StateType } from "../../../../redux/reducers/main";
import { setFormDataInfo } from "./../../../../redux/actions/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import Select from "../../../basic-ui/select";
import styles from "./styles.module.scss";
import { years } from "../../../../constant/years";

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
  const selected = main.formData?.vehicle_year;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<OptionType | undefined>({
    value: selected,
    label: selected,
  });
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          vehicle_year: formData?.value,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title={`Let's add your vehicle, ${main.formData.first_name}.`}
      description="Select vehicle year. *"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="23"
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
