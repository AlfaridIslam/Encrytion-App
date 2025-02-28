import express from "express";
import cryptoRoutes from "./cryptoRoutes.js";

const router = express.Router();

router.use("/crypto", cryptoRoutes);

// Health check route
router.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

export default router;
