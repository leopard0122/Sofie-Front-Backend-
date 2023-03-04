import express from "express";
import {
  createVehicle,
  createUserProfile,
  createUserRelatives,
} from "./service";
import { createUser, createPhoneNumber } from "../create-user/service";
import { createEmailAddress } from "./../create-user/service";
import { addDataToGoogleSheet } from "../../utils/helper";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    let {
      current_provider,
      have_car_insurance,
      no_car_insurance,
      driver_0,
      driver_1,
      driver_2,
      receive_quote,
      vehicle_0,
      vehicle_1,
      vehicle_2,
      vehicle_3,
      why_shop_car_insurance,
      first_name,
      last_name,
      phone_number,
      birthdate,
    } = req.body;

    no_car_insurance = have_car_insurance === "No" ? no_car_insurance : "";
    birthdate = new Date(birthdate);

    const user: any = await createUser(
      {
        first_name,
        last_name,
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

    await createUserProfile({
      user_id: user.id,
      have_car_insurance,
      no_car_insurance: no_car_insurance ?? "",
      why_shop_car_insurance,
    });

    const vehicle = [vehicle_0, vehicle_1, vehicle_2, vehicle_3];

    if (vehicle)
      await Promise.all(
        vehicle?.map(async (item: any): Promise<any> => {
          if (item) {
            await createVehicle({
              user_id: user.id,
              vehicle_year: item.vehicle_year,
              vehicle_brand: item.vehicle_brand,
              vehicle_model: item.vehicle_model,
              vehicle_value: item.vehicle_value,
              vehicle_status: item.vehicle_status,
              vehicle_purpose: item.vehicle_purpose,
              vehicle_insurance: item.vehicle_insurance,
              vehicle_current_insurance: current_provider,
            });
          }
        })
      );

    const driver = [driver_0, driver_1, driver_2];

    if (driver)
      await Promise.all(
        driver?.map(async (item: any): Promise<any> => {
          if (item) {
            await createUserRelatives({
              user_id: user.id,
              first_name: item.provider_first_name,
              last_name: item.provider_last_name,
              birthdate: new Date(item.provider_birthdate),
              relationship_type: item.provider_relationship,
            });
          }
        })
      );

    let formated_vehicle: string[] = [];
    for (let index = 0; index < 4; index++) {
      const element =
        vehicle && vehicle.length > index ? vehicle[index] : undefined;
      const formatted_element = element
        ? [
            element?.vehicle_year ?? "",
            element?.vehicle_brand ?? "",
            element?.vehicle_model ?? "",
            element?.vehicle_value ?? "",
            element?.vehicle_status ?? "",
            element?.vehicle_purpose ?? "",
            element?.vehicle_insurance ?? "",
            true,
          ]
        : ["", "", "", "", "", "", "", false];
      formated_vehicle = [...formated_vehicle, ...formatted_element];
    }
    formated_vehicle = formated_vehicle.slice(0, formated_vehicle.length - 1);

    let formated_driver: string[] = [];
    for (let index = 0; index < 3; index++) {
      const element =
        driver && driver.length > index ? driver[index] : undefined;
      const formatted_element = element
        ? [
            true,
            element?.provider_first_name ?? "",
            element?.provider_last_name ?? "",
            element?.provider_birthdate ?? "",
            element?.provider_relationship ?? "",
          ]
        : [false, "", "", "", ""];
      formated_driver = [...formated_driver, ...formatted_element];
    }

    await addDataToGoogleSheet(
      process.env.CAR_INSURANCE_SPREADSHEET_ID,
      "A:BL",
      [
        have_car_insurance === "Yes" ? true : false,
        why_shop_car_insurance,
        why_shop_car_insurance,
        no_car_insurance,
        first_name,
        last_name,
        birthdate,
        ...formated_vehicle,
        current_provider,
        ...formated_driver,
        receive_quote,
        phone_number,
        true,
        "",
        "",
        "",
        "",
        "",
        new Date(),
      ]
    );

    res.json("OK");
  } catch (error) {
    next(error);
  }
});

export default router;
