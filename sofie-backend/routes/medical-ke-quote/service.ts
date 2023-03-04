import db from "../../utils/db";

export function createUserHealthInsurance(data: any) {
  return db.user_Health_Insurance.create({
    data,
  });
}
