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
      required: [true, "Service type is required"],
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
      required: [true, "Service name is required"],
      trim: true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [/^[0-9]{10}$/, "Phone number must be exactly 10 digits"],
    },

    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Quote", quoteSchema);