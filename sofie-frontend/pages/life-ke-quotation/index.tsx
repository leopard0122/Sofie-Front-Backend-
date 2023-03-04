import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../redux/reducers/main";

import Layout from "../../layouts/layout";
import Home from "./../../components/pages/life-ke-quotation/home";
import Page1 from "../../components/pages/life-ke-quotation/have-life-insurance";
import Page2 from "../../components/pages/life-ke-quotation/why-shop-life-insurance";
import Page3 from "../../components/pages/life-ke-quotation/why-no-have-life-insurance";
import Page4 from "../../components/pages/life-ke-quotation/who_here_protect";
import Page5 from "../../components/pages/life-ke-quotation/when-covered-life-insurance";
import Page6 from "../../components/pages/life-ke-quotation/gender";
import Page7 from "../../components/pages/life-ke-quotation/birthdate";
import Page8 from "../../components/pages/life-ke-quotation/health";
import Page9 from "../../components/pages/life-ke-quotation/have-nicotine-products";
import Page10 from "../../components/pages/life-ke-quotation/annual-monthly-income";
import Page11 from "../../components/pages/life-ke-quotation/current-residency";
import Page12 from "../../components/pages/life-ke-quotation/insured-amount";
import Page13 from "../../components/pages/life-ke-quotation/first-name";
import Page14 from "../../components/pages/life-ke-quotation/last-name";
import Page15 from "../../components/pages/life-ke-quotation/receive-quote";
import Page16 from "../../components/pages/life-ke-quotation/phone-number";
import Page17 from "../../components/pages/life-ke-quotation/confirm-phone-number";

const LifeKeQuotation = () => {
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
  };

  return (
    <Layout totalPage={17}>
      <>{pageElements[currentPage]}</>
    </Layout>
  );
};

export default LifeKeQuotation;
