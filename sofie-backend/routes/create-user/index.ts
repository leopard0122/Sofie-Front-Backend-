import express from "express";
import { createUser, createPhoneNumber, createEmailAddress } from "./service";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { first_name, last_name, phone_number, email_address } = req.body;
    const user: any = await createUser(
      { first_name, last_name },
      email_address
    );
    await createPhoneNumber({ user_id: user.id, phone_number: phone_number });
    await createEmailAddress({
      user_id: user.id,
      email: email_address,
    });
    res.json(user);
  } catch (error) {
    next(error);
  }
});

export default router;
