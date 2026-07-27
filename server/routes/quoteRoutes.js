import express from "express";
import { body } from "express-validator";

import {
  createQuote,
  getQuotes,
  deleteQuote,
  updateQuoteStatus,
} from "../controllers/quoteController.js";

const router = express.Router();


// ✅ Create Quote + Get All Quotes
router
  .route("/")
  .post(
    [
      body("quantity")
        .isNumeric()
        .withMessage("Quantity must be a number")
        .custom((value) => value > 0)
        .withMessage("Quantity must be greater than 0"),

      body("serviceType")
        .notEmpty()
        .withMessage("Service type is required"),

      body("phone")
        .trim()
        .isLength({ min: 10, max: 10 })
        .withMessage("Phone must be exactly 10 digits")
        .isNumeric()
        .withMessage("Phone must contain only numbers"),
    ],
    createQuote
  )
  .get(getQuotes);


// ✅ Delete Quote
router.delete("/:id", deleteQuote);


// ✅ Update Status
router.put("/:id/status", updateQuoteStatus);


export default router;