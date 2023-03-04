import db from "../../utils/db";

export function createVehicle(data: any) {
  return db.user_Vehicles.create({
    data,
  });
}

export function createUserProfile(data: any) {
  return db.user_Profile.create({
    data,
  });
}

export function createUserRelatives(data: any) {
  return db.user_Relatives.create({
    data,
  });
}
