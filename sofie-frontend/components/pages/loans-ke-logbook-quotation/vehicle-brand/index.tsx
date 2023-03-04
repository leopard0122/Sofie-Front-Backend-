import React, { useState } from "react";
import { Check } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { setFormDataInfo } from "./../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import Select from "../../../basic-ui/select";
import styles from "./styles.module.scss";
import { brands } from "./../../../../constant/brands";

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = brands.map((item: string) => ({
  value: item,
  label: item,
}));

const VehicleBrand = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.vehicle_brand;
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
          vehicle_brand: formData?.value,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="Select vehicle brand. *"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="24"
      formData={formData?.value}
      downButtonDisable={downButtonDisable}
      setDownButtonDisable={setDownButtonDisable}
      submitFunction={submitFunction}
    >
      <div className={styles.wrapper}>
        <Select options={options} formData={formData} setFormData={setFormData} />
      </div>
    </ContentWrapper>
  );
};

export default VehicleBrand;
