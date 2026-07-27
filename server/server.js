import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

import connectDB from "./config/db.js";
import quoteRoutes from "./routes/quoteRoutes.js";

// ✅ Load env variables
dotenv.config();

// ✅ Connect Database
connectDB();

const app = express();

// ✅ Security Middleware
app.use(helmet());

// ✅ Logging
app.use(morgan("dev"));

// ✅ Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// ✅ Dynamic CORS (Production Safe)
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    credentials: true,
  })
);

// ✅ Body Parser
app.use(express.json());

// ✅ Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Shri Vishwkarma Enterprises API Running ✅",
  });
});

// ✅ Routes
app.use("/api/quote", quoteRoutes);

// ✅ 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// ✅ Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
  });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});