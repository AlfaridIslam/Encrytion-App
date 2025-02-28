import express from "express";
import { handleEncrypt, handleDecrypt } from "../controllers/index.js";
import { validateTextInput } from "../middleware/index.js";
import { ROUTES } from "../api/constants/index.js";

const router = express.Router();

// Encrypt text
router.post(ROUTES.ENCRYPT, validateTextInput, handleEncrypt);

// Decrypt text
router.post(ROUTES.DECRYPT, validateTextInput, handleDecrypt);

export default router;
