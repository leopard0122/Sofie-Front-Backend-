import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../redux/reducers/main";

import Layout from "./../../layouts/layout/index";
import Home from "./../../components/pages/medical-ke-quote/home";
import Page1 from "../../components/pages/medical-ke-quote/have-medical-insurance";
import Page2 from "../../components/pages/medical-ke-quote/why-shop-medical-insurance";
import Page3 from "../../components/pages/medical-ke-quote/why-no-have-medical-insurance";
import Page4 from "../../components/pages/medical-ke-quote/type-of-medical-cover";
import Page5 from "../../components/pages/medical-ke-quote/when-covered-medical-insurance";
import Page6 from "../../components/pages/medical-ke-quote/gender";
import Page7 from "../../components/pages/medical-ke-quote/birthdate";
import Page8 from "../../components/pages/medical-ke-quote/health";
import Page9 from "../../components/pages/medical-ke-quote/pre-existing-condition";
import Page10 from "../../components/pages/medical-ke-quote/nationality";
import Page11 from "../../components/pages/medical-ke-quote/current-residency";
import Page12 from "../../components/pages/medical-ke-quote/monthly-income";
import Page13 from "../../components/pages/medical-ke-quote/where-covered-interested-in";
import Page14 from "../../components/pages/medical-ke-quote/type-of-plan";
import Page15 from "../../components/pages/medical-ke-quote/first-name";
import Page16 from "../../components/pages/medical-ke-quote/last-name";
import Page17 from "../../components/pages/medical-ke-quote/receive-quote";
import Page18 from "../../components/pages/medical-ke-quote/phone-number";
import Page19 from "../../components/pages/medical-ke-quote/confirm-phone-number";

const CarInsuranceQuote = () => {
  const currentPage = useSelector((state: { main: StateType }) => state.main.currentPage);
  const pageElements: { [key: string]: ReactElement } = {
    "0": <Home />,
    "1": <Page1 />,
    "2": <Page2 />,
    "3": <Page3 />,
    "4": <Page4 />,
    "5": <Page5 />,
    "6": <Page6 />,
    "7": <Page7 />,
    "8": <Page8 />,
    "9": <Page9 />,
    "10": <Page10 />,
    "11": <Page11 />,
    "12": <Page12 />,
    "13": <Page13 />,
    "14": <Page14 />,
    "15": <Page15 />,
    "16": <Page16 />,
    "17": <Page17 />,
    "18": <Page18 />,
    "19": <Page19 />,
  };

  return (
    <Layout totalPage={19}>
      <>{pageElements[currentPage]}</>
    </Layout>
  );
};

export default CarInsuranceQuote;
