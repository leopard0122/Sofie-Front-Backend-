import db from "../../utils/db";

export function createUserEmployment(data: any) {
  return db.user_Employment.create({
    data,
  });
}

export function createUserBusiness(data: any) {
  return db.user_Business.create({
    data,
  });
}

export function createUserLoan(data: any) {
  return db.user_Loan.create({
    data,
  });
}

export function createUserGuarantor(data: any) {
  return db.user_Guarantor.create({
    data,
  });
}
