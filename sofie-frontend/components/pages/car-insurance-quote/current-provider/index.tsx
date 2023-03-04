import React, { useState } from "react";
import { Check } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
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

const CurrentProvider = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.current_provider;
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
          current_provider: formData?.value,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="Who is your current provider?*"
      description={`If any. Select "Other" if your company is not on the list.`}
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="16"
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

export default CurrentProvider;
