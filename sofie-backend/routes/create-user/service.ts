import db from "../../utils/db";

export async function createUser(data: any, email: string) {
  const user: any = await db.user_Email.findUnique({
    where: {
      email,
    },
    select: {
      user_id: true,
    },
  });

  if (user) {
    return db.users.findUnique({
      where: { id: user.user_id },
    });
  } else {
    return db.users.create({
      data,
    });
  }
}

export async function createPhoneNumber(data: any) {
  const user = await db.user_Phone_Number.findUnique({
    where: { phone_number: data.phone_number },
    select: { user_id: true },
  });
  if (user) {
    return db.user_Phone_Number.findUnique({
      where: { id: user.user_id },
    });
  } else {
    return db.user_Phone_Number.create({
      data,
    });
  }
}

export async function createEmailAddress(data: any) {
  const user = await db.user_Email.findUnique({
    where: { email: data.email },
    select: { user_id: true },
  });
  if (user) {
    return db.user_Email.findUnique({
      where: { id: user.user_id },
    });
  } else {
    return db.user_Email.create({
      data,
    });
  }
}
