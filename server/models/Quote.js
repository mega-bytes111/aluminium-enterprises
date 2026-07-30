import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: [true, "Area/Quantity is required"],
      min: [1, "Quantity must be greater than 0"],
    },

    serviceType: {
      type: String,
      required: true,
      enum: [
  "cladding",
  "facade",
  "toughened_glass",
  "glass_doors",
  "glass_railings",
  "signage",
  "partition",
  "canopy",
  "hoarding"
],
    },

    serviceName: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^[0-9]{10}$/, "Phone number must be 10 digits"],
    },

    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Quote", quoteSchema);