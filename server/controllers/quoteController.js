import mongoose from "mongoose";
import Quote from "../models/Quote.js";


// ✅ Service Name Mapping
const serviceNames = {
  cladding: "ACP Cladding",
  facade: "ACP Facade",
  toughened_glass: "Toughened Glass Installation",
  glass_doors: "Glass Doors & Windows",
  glass_railings: "Glass Railings",
  signage: "ACP Signage",
  partition: "ACP Partition",
  canopy: "Entrance Canopy",
  hoarding: "Hoardings",
};


// 👉 Create Quote
export const createQuote = async (req, res) => {
  try {
    const { quantity, serviceType, phone } = req.body;

    // ✅ Basic Validation
    if (!quantity || quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Valid quantity is required",
      });
    }

    if (!phone || !/^[0-9]{10}$/.test(phone)) {
      return res.status(400).json({
        success: false,
        message: "Valid 10-digit phone number required",
      });
    }

    if (!serviceType || !serviceNames[serviceType]) {
      return res.status(400).json({
        success: false,
        message: "Invalid service type selected",
      });
    }

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
      message: error.message || "Server Error",
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

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Quote ID",
      });
    }

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