import React, { useState } from "react";
import { Check } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { setFormDataInfo } from "../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import { providers } from "../../../../constant/providers";
import ContentWrapper from "../../../../layouts/content-wrapper";
import Select from "../../../basic-ui/select";
import styles from "./styles.module.scss";

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = providers.map((item: string) => ({
  value: item,
  label: item,
}));

const CurrentProviderOfCarInsurance = () => {
  const main = useSelector((state: { main: StateType }) => state.main);
  const selected = main.formData?.current_provider_of_car_insurance;
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
          current_provider_of_car_insurance: formData?.value,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title={`Who is the current provider of car insurance for ${main.formData.vehicle_model}, ${main.formData.vehicle_brand}*`}
      description={`If any. Select "Other" if your company is not on the list.`}
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="29"
      downButtonDisable={downButtonDisable}
      setDownButtonDisable={setDownButtonDisable}
      formData={formData}
      submitFunction={submitFunction}
    >
      <div className={styles.wrapper}>
        <Select options={options} formData={formData} setFormData={setFormData} />
      </div>
    </ContentWrapper>
  );
};

export default CurrentProviderOfCarInsurance;
