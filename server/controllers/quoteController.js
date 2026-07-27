import mongoose from "mongoose";
import Quote from "../models/Quote.js";
import { validationResult } from "express-validator";


// 👉 Create Quote
export const createQuote = async (req, res) => {
  try {
    const { quantity, serviceType, phone } = req.body;

    if (!quantity || quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Valid quantity is required",
      });
    }

    if (!phone || phone.length !== 10) {
      return res.status(400).json({
        success: false,
        message: "Valid 10-digit phone number required",
      });
    }

    const serviceNames = {
      cladding: "ACP Cladding",
      facade: "ACP Facade",
      signage: "ACP Signage",
      partition: "ACP Partition",
      canopy: "Entrance Canopy",
      hoarding: "Hoardings",
    };

    const quote = await Quote.create({
      quantity,
      serviceType,
      serviceName: serviceNames[serviceType],
      phone,
    });

    res.status(201).json({
      success: true,
      message: "Quote submitted successfully",
      data: quote,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



// 👉 Get All Quotes
export const getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: quotes.length,
      data: quotes,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};



// 👉 Delete Quote
export const deleteQuote = async (req, res) => {
  try {
    const { id } = req.params;

    // ✅ Check valid Mongo ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Quote ID",
      });
    }

    const quote = await Quote.findById(id);

    if (!quote) {
      return res.status(404).json({
        success: false,
        message: "Quote not found",
      });
    }

    await quote.deleteOne();

    res.status(200).json({
      success: true,
      message: "Quote deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};



// 👉 Update Quote Status
export const updateQuoteStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatus = ["new", "contacted", "closed"];

    // ✅ Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Quote ID",
      });
    }

    // ✅ Validate Status
    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status value",
      });
    }

    const updatedQuote = await Quote.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedQuote) {
      return res.status(404).json({
        success: false,
        message: "Quote not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
      data: updatedQuote,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};