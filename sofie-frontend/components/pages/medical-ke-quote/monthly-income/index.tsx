import React, { useState } from "react";
import { Check } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { setFormDataInfo } from "../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import Select from "../../../basic-ui/select";
import styles from "./styles.module.scss";
import { monthly_incomes } from "../../../../constant/monthly-incomes";

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = monthly_incomes.map((item: string) => ({
  value: item,
  label: item,
}));

const MonthlyIncome = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.monthly_income;
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
          monthly_income: formData?.value,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="What is your monthly income?*"
      description="Figures in KES"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="13"
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

export default MonthlyIncome;
