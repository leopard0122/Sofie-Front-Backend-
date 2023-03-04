import db from "../../utils/db";

export function createUserLifeInsurance(data: any) {
  return db.user_Life_Insurance.create({
    data,
  });
}

export function createCountry(data: any) {
  return db.country.create({
    data,
  });
}

export function createResidence(data: any) {
  return db.residence.create({
    data,
  });
}
