import React, { useState } from "react";
import { Check } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { setFormDataInfo } from "../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import Select from "../../../basic-ui/select";
import styles from "./styles.module.scss";
import { legal_entity } from "../../../../constant/legal-entity";

type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = legal_entity.map((item: string) => ({
  value: item,
  label: item,
}));

const TypeOfLegal = () => {
  const main = useSelector((state: { main: StateType }) => state.main);
  const selected = main.formData?.type_of_legal;
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
          type_of_legal: formData?.value,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title={`What type of legal entity is ${main.formData.business}?*`}
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="14"
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

export default TypeOfLegal;
