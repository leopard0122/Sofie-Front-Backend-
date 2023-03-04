import React from "react";
import { LucideProps, ChevronUp, ChevronDown } from "lucide-react";
import { FadeIn } from "react-slide-fade-in";

import { useSelector, useDispatch } from "react-redux";
import { setPageInfo } from "./../../redux/actions/main";
import { StateType } from "../../redux/reducers/main";

import Text from "./../../components/basic-ui/text";
import SimpleButton from "../../components/basic-ui/simple-button";
import styles from "./styles.module.scss";

type ContentWrapperProps = {
  children: JSX.Element;
  title: string;
  description?: string;
  buttonLabel: string;
  buttonBgColor?: string;
  ButtonIcon?: (props: LucideProps) => JSX.Element;
  nextPage?: string;
  upButtonDisable?: boolean;
  formData?: any;
  submitFunction?: Function;
  downButtonDisable?: boolean;
  setDownButtonDisable: React.Dispatch<React.SetStateAction<boolean>>;
};

const ContentWrapper: React.FC<ContentWrapperProps> = ({
  children,
  title,
  description,
  buttonLabel,
  buttonBgColor = "primary",
  ButtonIcon,
  nextPage = "",
  upButtonDisable = false,
  formData = "",
  submitFunction = () => {},
  downButtonDisable = true,
  setDownButtonDisable,
}) => {
  const pageInfo: StateType = useSelector((state: { main: StateType }) => state.main);
  const dispatch: any = useDispatch();

  return (
    <div className={styles.wrapper}>
      <FadeIn from="top" positionOffset={100} triggerOffset={400} delayInMilliseconds={100}>
        <div className={styles.content}>
          <div className={styles.title}>
            <Text size="lg">{title}</Text>
          </div>
          <div className={styles.description}>
            <Text size="md">{description}</Text>
          </div>
          {children}
          <div className={styles.button}>
            <SimpleButton
              label={buttonLabel}
              bgColor={buttonBgColor}
              Icon={ButtonIcon}
              onClick={() => {
                setDownButtonDisable(false);
                if (nextPage) {
                  dispatch(
                    setPageInfo({
                      currentPage: nextPage,
                      prevPages: [...pageInfo.prevPages, pageInfo.currentPage],
                    })
                  );
                }
                submitFunction();
              }}
              disable={typeof formData == "string" ? (formData ? false : true) : formData.value ? false : true}
            />
          </div>
        </div>
      </FadeIn>
      <div className={styles.buttonGroup}>
        <SimpleButton
          Icon={ChevronUp}
          bgColor={buttonBgColor}
          disable={upButtonDisable}
          onClick={() => {
            dispatch(
              setPageInfo({
                currentPage: pageInfo.prevPages[pageInfo.prevPages.length - 1],
                prevPages: pageInfo.prevPages.slice(0, pageInfo.prevPages.length - 1),
              })
            );
          }}
        />
        <SimpleButton
          Icon={ChevronDown}
          bgColor={buttonBgColor}
          disable={downButtonDisable}
          onClick={() => {
            dispatch(
              setPageInfo({
                currentPage: nextPage,
                prevPages: [...pageInfo.prevPages, pageInfo.currentPage],
              })
            );
          }}
        />
      </div>
    </div>
  );
};

export default ContentWrapper;
