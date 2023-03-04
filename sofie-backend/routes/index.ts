import express from "express";
import car_insurance_quote from "./car-insurance-quote";
import life_ke_quotation from "./life-ke-quotation";
import create_user from "./create-user";
import medical_ke_quote from "./medical-ke-quote";
import loan_ke_logbook_quotation from "./loans-ke-logbook-quotation";

const router = express.Router();

router.use("/car-insurance-quote", car_insurance_quote);
router.use("/life-ke-quotation", life_ke_quotation);
router.use("/create-user", create_user);
router.use("/medical-ke-quote", medical_ke_quote);
router.use("/loans-ke-logbook-quotation", loan_ke_logbook_quotation);

export default router;
