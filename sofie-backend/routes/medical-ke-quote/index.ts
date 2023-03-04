import express from "express";
import { addDataToGoogleSheet } from "../../utils/helper";
import { createUserProfile } from "../car-insurance-quote/service";
import {
  createCountry,
  createResidence,
  createUserLifeInsurance,
} from "../life-ke-quotation/service";
import {
  createEmailAddress,
  createPhoneNumber,
  createUser,
} from "./../create-user/service";
import { createUserHealthInsurance } from "./service";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    let {
      have_medical_insurance,
      why_shop_medical_insurance,
      why_no_have_medical_insurance,
      type_of_medical_cover,
      when_covered_medical_insurance,
      gender,
      birthdate,
      health,
      pre_existing_condition,
      nationality,
      current_residency,
      monthly_income,
      where_covered_interested_in,
      type_of_plan,
      first_name,
      last_name,
      receive_quote,
      phone_number,
    } = req.body;

    why_shop_medical_insurance =
      have_medical_insurance === "Yes" ? why_shop_medical_insurance : "";
    birthdate = new Date(birthdate);

    const user: any = await createUser(
      {
        first_name,
        last_name,
        gender,
        birthdate,
      },
      receive_quote
    );

    await createPhoneNumber({
      user_id: user.id,
      phone_number,
    });

    await createEmailAddress({
      user_id: user.id,
      email: receive_quote,
    });

    await createCountry({
      nationality,
    });

    await createUserProfile({
      user_id: user.id,
      monthly_pretax_income: monthly_income,
      when_ready_medical_insurance: when_covered_medical_insurance,
      why_shop_health_insurance: why_shop_medical_insurance,
      no_health_insurance: why_no_have_medical_insurance,
    });

    await createResidence({
      user_id: user.id,
      current_residency_country_id: current_residency,
    });

    await createUserLifeInsurance({
      user_id: user.id,
      health_status: health,
      pre_existing_conditions: pre_existing_condition,
    });

    await createUserHealthInsurance({
      user_id: user.id,
      type_of_plan_interested_in: type_of_plan,
      type_of_medical_cover: type_of_medical_cover.toString(),
      location_for_cover: where_covered_interested_in,
    });

    await addDataToGoogleSheet(
      process.env.MEDICAL_INSURANCE_SPREADSHEET_ID,
      "A:Z",
      [
        have_medical_insurance === "Yes" ? true : false,
        why_shop_medical_insurance,
        why_no_have_medical_insurance,
        type_of_medical_cover.toString(),
        when_covered_medical_insurance,
        gender,
        birthdate,
        health,
        pre_existing_condition,
        nationality,
        current_residency,
        monthly_income,
        where_covered_interested_in,
        type_of_plan,
        first_name,
        last_name,
        receive_quote,
        phone_number,
        "TRUE",
        "",
        "",
        "",
        "",
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
