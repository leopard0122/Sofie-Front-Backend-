import express from "express";
import {
  createUserProfile,
  createVehicle,
} from "../car-insurance-quote/service";
import { createUser } from "../create-user/service";
import { createPhoneNumber } from "../create-user/service";
import {
  createUserEmployment,
  createUserBusiness,
  createUserLoan,
  createUserGuarantor,
} from "./service";
import { createUserRelatives } from "./../car-insurance-quote/service";
import { createEmailAddress } from "./../create-user/service";
import { addDataToGoogleSheet } from "../../utils/helper";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    let {
      first_name,
      last_name,
      birthdate,
      have_logbook_loan,
      employment_status,
      business,
      current_employment_status,
      nature_of_business,
      type_of_legal,
      average_monthly_revenue,
      have_loan_for_your_business,
      how_long_business,
      vehicle_be_providing_guarantee,
      vehicle_providing_guarantee,
      relationship,
      vehicle_year,
      vehicle_brand,
      vehicle_model,
      vehicle_value,
      type_of_car_insurance,
      receive_copy_of_quote,
      phone_number,
      current_occuptation,
      monthly_salary_net,
      sector_employed_in,
      where_current_employed,
      have_vehicle_to_provide,
      provide_vehicle_guarantee,
      currently_have_insurance,
      current_provider_of_car_insurance,
    } = req.body;

    where_current_employed =
      employment_status === "Employed" ? where_current_employed : "";
    current_employment_status =
      employment_status === "Employed" ? current_employment_status : "";
    sector_employed_in =
      employment_status === "Employed" ? sector_employed_in : "";
    current_occuptation =
      employment_status === "Employed" ? current_occuptation : "";
    monthly_salary_net =
      employment_status === "Employed" ? monthly_salary_net : "";
    business = employment_status === "Employed" ? "" : business;
    nature_of_business =
      employment_status === "Employed" ? "" : nature_of_business;
    type_of_legal = employment_status === "Employed" ? "" : type_of_legal;
    average_monthly_revenue =
      employment_status === "Employed" ? "" : average_monthly_revenue;
    how_long_business =
      employment_status === "Employed" ? "" : how_long_business;
    vehicle_be_providing_guarantee =
      have_vehicle_to_provide === "Yes" ? vehicle_be_providing_guarantee : "";
    vehicle_providing_guarantee =
      vehicle_be_providing_guarantee === "My vehicle"
        ? ""
        : vehicle_providing_guarantee;
    relationship =
      vehicle_be_providing_guarantee === "My vehicle" ? "" : relationship;
    provide_vehicle_guarantee =
      vehicle_be_providing_guarantee === "My vehicle"
        ? ""
        : provide_vehicle_guarantee;
    vehicle_year =
      vehicle_be_providing_guarantee === "My vehicle" ? vehicle_year : "";
    vehicle_brand =
      vehicle_be_providing_guarantee === "My vehicle" ? vehicle_brand : "";
    vehicle_model =
      vehicle_be_providing_guarantee === "My vehicle" ? vehicle_model : "";
    vehicle_value =
      vehicle_be_providing_guarantee === "My vehicle" ? vehicle_value : "";
    currently_have_insurance =
      vehicle_be_providing_guarantee === "My vehicle"
        ? currently_have_insurance
        : "";
    type_of_car_insurance =
      vehicle_be_providing_guarantee === "My vehicle"
        ? type_of_car_insurance
        : "";
    current_provider_of_car_insurance =
      vehicle_be_providing_guarantee === "My vehicle"
        ? current_provider_of_car_insurance
        : "";

    const user: any = await createUser(
      {
        first_name,
        last_name,
        birthdate: new Date(birthdate),
      },
      receive_copy_of_quote
    );

    await createPhoneNumber({
      user_id: user.id,
      phone_number,
    });

    await createEmailAddress({
      user_id: user.id,
      email: receive_copy_of_quote,
    });

    await createUserProfile({
      user_id: user.id,
      monthly_pretax_income: monthly_salary_net,
    });

    await createUserRelatives({
      user_id: user.id,
      relationship_type: relationship,
    });

    await createVehicle({
      user_id: user.id,
      vehicle_year: vehicle_year,
      vehicle_brand: vehicle_brand,
      vehicle_model: vehicle_model,
      vehicle_value: vehicle_value,
    });

    await createUserEmployment({
      user_id: user.id,
      current_employment: current_employment_status,
      employment_status,
      employment_sector: sector_employed_in,
      current_occuptation,
    });

    await createUserBusiness({
      user_id: user.id,
      business_name: business,
      nature_of_business_id_business_sector: nature_of_business,
      type_of_legal_entity: type_of_legal,
      monthly_revenue_12_months: average_monthly_revenue,
      any_existing_loan: have_loan_for_your_business,
      age_of_business: how_long_business,
    });

    await createUserLoan({
      user_id: user.id,
      currently_using_logbook_loan: have_logbook_loan,
    });

    await createUserGuarantor({
      user_id: user.id,
      relationship_with_userid: vehicle_be_providing_guarantee,
      acceptance_for_loan: vehicle_providing_guarantee,
      vehicle_insurance: type_of_car_insurance,
    });

    await addDataToGoogleSheet(
      process.env.LOGBOOK_LOAN_SPREADSHEET_ID,
      "A:AQ",
      [
        first_name,
        last_name,
        birthdate,
        have_logbook_loan === "Yes" ? true : false,
        employment_status,
        where_current_employed,
        current_employment_status,
        sector_employed_in,
        current_occuptation,
        "",
        monthly_salary_net,
        business,
        nature_of_business,
        type_of_legal,
        "",
        average_monthly_revenue,
        employment_status === "Employed"
          ? ""
          : have_loan_for_your_business === "Yes"
          ? true
          : false,
        how_long_business,
        have_vehicle_to_provide === "Yes" ? true : false,
        vehicle_be_providing_guarantee,
        vehicle_providing_guarantee,
        relationship,
        provide_vehicle_guarantee,
        vehicle_year,
        vehicle_brand,
        vehicle_model,
        vehicle_value,
        currently_have_insurance,
        type_of_car_insurance,
        current_provider_of_car_insurance,
        receive_copy_of_quote,
        phone_number,
        true,
        "",
        "",
        "",
        "",
        "",
        "",
        average_monthly_revenue,
        "",
        new Date(),
        "",
      ]
    );

    res.json("OK");
  } catch (error) {
    console.log("error: ", error);
  }
});

export default router;
