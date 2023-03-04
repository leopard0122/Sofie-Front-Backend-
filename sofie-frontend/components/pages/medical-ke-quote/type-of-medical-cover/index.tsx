import React, { useState } from "react";
import { Check } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { setFormDataInfo } from "../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import Checkbox from "../../../ui-components/checkbox";
import styles from "./styles.module.scss";
import { CheckboxItemType } from "../../../basic-ui/checkbox-item";

const checkboxes: CheckboxItemType[] = [
  { keyboard: "A", label: "Corporate", value: "Corporate" },
  { keyboard: "B", label: "Individual", value: "Individual" },
  { keyboard: "C", label: "Family", value: "Family" },
];

const TypeOfMedicalCover = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.type_of_medical_cover;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string[]>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          type_of_medical_cover: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="What type of medical cover are you looking for?*"
      buttonLabel="OK"
      ButtonIcon={Check}
      nextPage="5"
      downButtonDisable={downButtonDisable}
      setDownButtonDisable={setDownButtonDisable}
      formData={formData?.toString()}
      submitFunction={submitFunction}
    >
      <div className={styles.wrapper}>
        <Checkbox checkboxes={checkboxes} selectedItems={formData} setSelectedItems={setFormData} />
      </div>
    </ContentWrapper>
  );
};

export default TypeOfMedicalCover;
