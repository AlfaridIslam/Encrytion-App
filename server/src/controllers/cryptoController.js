import { encryptText, decryptText } from "../utils/index.js";

/**
 * Controller to handle encryption requests
 */
export const handleEncrypt = (req, res, next) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const encryptedText = encryptText(text);
    return res.status(200).json({ encryptedText });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to handle decryption requests
 */
export const handleDecrypt = (req, res, next) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Encrypted text is required" });
    }

    const decryptedText = decryptText(text);
    return res.status(200).json({ decryptedText });
  } catch (error) {
    next(error);
  }
};
