import express from "express";
import { addDataToGoogleSheet } from "../../utils/helper";
import { createUserProfile } from "../car-insurance-quote/service";
import { createEmailAddress, createUser } from "../create-user/service";
import { createPhoneNumber } from "../create-user/service";
import { createUserRelatives } from "./../car-insurance-quote/service";
import {
  createUserLifeInsurance,
  createCountry,
  createResidence,
} from "./service";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    let {
      have_life_insurance,
      why_no_have_life_insurance,
      why_shop_life_insurance,
      who_here_protect,
      when_covered_life_insurance,
      gender,
      birthdate,
      health,
      have_nicotine,
      annual_monthly_income,
      nationality,
      current_residency,
      insured_amount,
      first_name,
      last_name,
      receive_quote,
      phone_number,
    } = req.body;

    why_no_have_life_insurance =
      have_life_insurance === "Yes" ? "" : why_no_have_life_insurance;
    why_shop_life_insurance =
      have_life_insurance === "Yes" ? why_shop_life_insurance : "";
    birthdate = new Date(birthdate);

    const user: any = await createUser(
      {
        first_name,
        last_name,
        birthdate,
        gender,
      },
      receive_quote
    );

    await createPhoneNumber({
      user_id: user.id,
      phone_number,
    });

    await createUserProfile({
      user_id: user.id,
      have_life_insurance,
      // no_life_insurance: why_no_have_life_insurance,
      why_shop_life_insurance,
      monthly_pretax_income: annual_monthly_income,
      // when_ready_life_insurance: `${when_covered_life_insurance}`,
    });

    await createUserLifeInsurance({
      user_id: user.id,
      health_status: health,
      use_nicotine_products: have_nicotine,
      life_amount_insured_requested: insured_amount,
    });

    await createCountry({
      nationality,
    });

    await createResidence({
      user_id: user.id,
      current_residency_country_id: current_residency,
    });

    await createEmailAddress({
      user_id: user.id,
      email: receive_quote,
    });

    await createUserRelatives({
      user_id: user.id,
      relationship_type: who_here_protect.toString(),
    });

    await addDataToGoogleSheet(
      process.env.LIFE_INSURANCE_SPREADSHEET_ID,
      "A:Z",
      [
        have_life_insurance === "Yes" ? true : false,
        why_no_have_life_insurance,
        why_shop_life_insurance,
        who_here_protect.toString(),
        when_covered_life_insurance,
        gender,
        birthdate,
        health,
        have_nicotine,
        "",
        first_name,
        last_name,
        receive_quote,
        phone_number,
        true,
        "",
        "",
        "",
        "",
        "",
        annual_monthly_income,
        nationality,
        current_residency,
        insured_amount,
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
