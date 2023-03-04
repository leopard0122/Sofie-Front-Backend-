import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../redux/reducers/main";

import Layout from "../../layouts/layout";
import Home from "../../components/pages/loans-ke-logbook-quotation/home";
import Page1 from "../../components/pages/loans-ke-logbook-quotation/first-name";
import Page2 from "../../components/pages/loans-ke-logbook-quotation/last-name";
import Page3 from "../../components/pages/loans-ke-logbook-quotation/birthdate";
import Page4 from "../../components/pages/loans-ke-logbook-quotation/have-logbook-loan";
import Page5 from "../../components/pages/loans-ke-logbook-quotation/employment-status";
import Page6 from "../../components/pages/loans-ke-logbook-quotation/where-current-employed";
import Page7 from "../../components/pages/loans-ke-logbook-quotation/current-employment-status";
import Page8 from "../../components/pages/loans-ke-logbook-quotation/sector-employed-in";
import Page9 from "../../components/pages/loans-ke-logbook-quotation/current-occupation";
import Page10 from "../../components/pages/loans-ke-logbook-quotation/monthly-salary-net";
import Page11 from "../../components/pages/loans-ke-logbook-quotation/business";
import Page12 from "../../components/pages/loans-ke-logbook-quotation/nature-of-business";
import Page13 from "../../components/pages/loans-ke-logbook-quotation/type-of-legal";
import Page14 from "../../components/pages/loans-ke-logbook-quotation/average-monthly-revenue";
import Page15 from "../../components/pages/loans-ke-logbook-quotation/have-loan-for-your-business";
import Page16 from "../../components/pages/loans-ke-logbook-quotation/how-long-business";
import Page17 from "../../components/pages/loans-ke-logbook-quotation/have-vehicle-to-provide";
import Page18 from "../../components/pages/loans-ke-logbook-quotation/vehicle-be-providing-guarantee";
import Page19 from "../../components/pages/loans-ke-logbook-quotation/vehicle-providing-guarantee";
import Page20 from "../../components/pages/loans-ke-logbook-quotation/relationship";
import Page21 from "../../components/pages/loans-ke-logbook-quotation/provide-vehicle-guarantee";
import Page22 from "../../components/pages/loans-ke-logbook-quotation/vehicle-year";
import Page23 from "../../components/pages/loans-ke-logbook-quotation/vehicle-brand";
import Page24 from "../../components/pages/loans-ke-logbook-quotation/vehicle-model";
import Page25 from "../../components/pages/loans-ke-logbook-quotation/vehicle-value";
import Page26 from "../../components/pages/loans-ke-logbook-quotation/currently-have-insurance";
import Page27 from "../../components/pages/loans-ke-logbook-quotation/type-of-car-insurance";
import Page28 from "../../components/pages/loans-ke-logbook-quotation/current-provider-of-car-insurance";
import Page29 from "../../components/pages/loans-ke-logbook-quotation/receive-copy-of-quote";
import Page30 from "../../components/pages/loans-ke-logbook-quotation/phone-number";
import Page31 from "../../components/pages/loans-ke-logbook-quotation/confirm-phone-number";

const MedicalKeQuote = () => {
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
    "24": <Page24 />,
    "25": <Page25 />,
    "26": <Page26 />,
    "27": <Page27 />,
    "28": <Page28 />,
    "29": <Page29 />,
    "30": <Page30 />,
    "31": <Page31 />,
  };

  return (
    <Layout totalPage={31}>
      <>{pageElements[currentPage]}</>
    </Layout>
  );
};

export default MedicalKeQuote;
