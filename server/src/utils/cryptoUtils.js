import CryptoJS from "crypto-js";
import dotenv from "dotenv";

dotenv.config();

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

/**
 * Encrypts text using AES encryption
 * @param {string} text - The text to encrypt
 * @returns {string} - The encrypted text
 */
export const encryptText = (text) => {
  try {
    const encrypted = CryptoJS.AES.encrypt(text, ENCRYPTION_KEY).toString();
    return encrypted;
  } catch (error) {
    throw new Error("Encryption failed");
  }
};

/**
 * Decrypts text using AES encryption
 * @param {string} encryptedText - The text to decrypt
 * @returns {string} - The decrypted text
 */
export const decryptText = (encryptedText) => {
  try {
    const decrypted = CryptoJS.AES.decrypt(encryptedText, ENCRYPTION_KEY);
    return decrypted.toString(CryptoJS.enc.Utf8);
  } catch (error) {
    throw new Error("Decryption failed");
  }
};
