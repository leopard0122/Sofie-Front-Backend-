import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";

import { useDispatch, useSelector } from "react-redux";
import { setFormDataInfo, setPageInfo } from "../../../../redux/actions/main";
import { StateType } from "../../../../redux/reducers/main";

import ContentWrapper from "../../../../layouts/content-wrapper";
import UnderlineInput from "../../../basic-ui/underline-input";
import styles from "./styles.module.scss";

const ReceiveQuote = () => {
  const main = useSelector((state: { main: StateType }) => state.main);
  const selected = main.formData?.receive_quote;
  const dispatch: any = useDispatch();
  const regExp = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;
  const [formData, setFormData] = useState<string>(selected);
  const [error, setError] = useState<boolean>(false);
  const [nextPage, setNextPage] = useState<string>("21");
  const [downButtonDisable, setDownButtonDisable] = useState<boolean>(selected ? false : true);
  const submitFunction = async () => {
    if (regExp.test(formData)) {
      await dispatch(
        setFormDataInfo({
          formData: {
            receive_quote: formData,
          },
        })
      );
      dispatch(
        setPageInfo({
          currentPage: "22",
          prevPages: [...main.prevPages, main.currentPage],
        })
      );
    } else {
      setError(true);
      await dispatch(
        setPageInfo({
          currentPage: "21",
          prevPages: main.prevPages.slice(0, main.prevPages.length),
        })
      );
      setDownButtonDisable(true);
    }
  };

  useEffect(() => {
    if (regExp.test(selected)) {
      setNextPage("22");
    }
  }, []);

  useEffect(() => {
    if (regExp.test(formData)) {
      setError(false);
    }
  }, [formData]);

  return (
    <ContentWrapper
      title={`${main.formData.first_name}, Where would you like to receive a copy of your quote?*`}
      buttonLabel="OK"
      ButtonIcon={Check}
      formData={formData}
      nextPage={nextPage}
      downButtonDisable={downButtonDisable}
      setDownButtonDisable={setDownButtonDisable}
      submitFunction={submitFunction}
    >
      <div className={styles.wrapper}>
        <UnderlineInput placeholder="name@example.com" type="email" formData={formData} setFormData={setFormData} />
        {error && <p className={styles.error}>Please match requested format.</p>}
      </div>
    </ContentWrapper>
  );
};

export default ReceiveQuote;
