import React, { useState } from "react";
import { Check } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { setFormDataInfo } from "../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import Checkbox from "../../../ui-components/checkbox";
import { CheckboxItemType } from "../../../basic-ui/checkbox-item";
import styles from "./styles.module.scss";

const checkboxes: CheckboxItemType[] = [
  { keyboard: "A", label: "Myself", value: "Myself" },
  { keyboard: "B", label: "Spouse", value: "Spouse" },
  { keyboard: "C", label: "Children", value: "Children" },
  { keyboard: "D", label: "Partner", value: "Partner" },
  { keyboard: "E", label: "Parent", value: "Parent" },
  { keyboard: "F", label: "Other", value: "Other" },
];

const WhoHereProtect = () => {
  const selected = useSelector((state: { main: StateType }) => state.main).formData?.who_here_protect;
  const dispatch: any = useDispatch();
  const [formData, setFormData] = useState<string[]>(selected);
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = () => {
    dispatch(
      setFormDataInfo({
        formData: {
          who_here_protect: formData,
        },
      })
    );
  };

  return (
    <ContentWrapper
      title="Who are you here to protect?*"
      description="Select up to 4 now and we can add more later."
      buttonLabel="OK"
      ButtonIcon={Check}
      formData={formData?.toString()}
      downButtonDisable={downButtonDisable}
      setDownButtonDisable={setDownButtonDisable}
      nextPage="5"
      submitFunction={submitFunction}
    >
      <div className={styles.wrapper}>
        <Checkbox checkboxes={checkboxes} selectedItems={formData} setSelectedItems={setFormData} />
      </div>
    </ContentWrapper>
  );
};

export default WhoHereProtect;
