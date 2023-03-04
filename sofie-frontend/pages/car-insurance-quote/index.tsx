import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../redux/reducers/main";

import Layout from "../../layouts/layout";
import Home from "./../../components/pages/car-insurance-quote/home";
import Page1 from "../../components/pages/car-insurance-quote/have-car-insurance";
import Page2 from "../../components/pages/car-insurance-quote/why-shop-car-insurance";
import Page3 from "../../components/pages/car-insurance-quote/no-car-insurance";
import Page4 from "../../components/pages/car-insurance-quote/first-name";
import Page5 from "../../components/pages/car-insurance-quote/last-name";
import Page6 from "../../components/pages/car-insurance-quote/birthdate";
import Page7 from "../../components/pages/car-insurance-quote/vehicle-year";
import Page8 from "../../components/pages/car-insurance-quote/vehicle-brand";
import Page9 from "../../components/pages/car-insurance-quote/vehicle-model";
import Page10 from "../../components/pages/car-insurance-quote/vehicle-value";
import Page11 from "../../components/pages/car-insurance-quote/vehicle-status";
import Page12 from "../../components/pages/car-insurance-quote/vehicle-purpose";
import Page13 from "../../components/pages/car-insurance-quote/vehicle-insurance";
import Page14 from "../../components/pages/car-insurance-quote/add-vehicle";
import Page15 from "../../components/pages/car-insurance-quote/current-provider";
import Page16 from "../../components/pages/car-insurance-quote/add-driver";
import Page17 from "../../components/pages/car-insurance-quote/provider-first-name";
import Page18 from "../../components/pages/car-insurance-quote/provider-last-name";
import Page19 from "../../components/pages/car-insurance-quote/provider-birthdate";
import Page20 from "../../components/pages/car-insurance-quote/provider-relationship";
import Page21 from "../../components/pages/car-insurance-quote/receive-quote";
import Page22 from "../../components/pages/car-insurance-quote/phone-number";
import Page23 from "../../components/pages/car-insurance-quote/confirm-phone-number";

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
    "20": <Page20 />,
    "21": <Page21 />,
    "22": <Page22 />,
    "23": <Page23 />,
  };

  return (
    <Layout totalPage={23}>
      <>{pageElements[currentPage]}</>
    </Layout>
  );
};

export default CarInsuranceQuote;
