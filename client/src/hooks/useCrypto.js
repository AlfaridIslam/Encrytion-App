import { useState } from "react";
import { encryptText, decryptText } from "../api/cryptoService";

export const useCrypto = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const encrypt = async (text) => {
    try {
      setLoading(true);
      setError("");
      const result = await encryptText(text);
      return result;
    } catch (err) {
      setError("Failed to encrypt text");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const decrypt = async (text) => {
    try {
      setLoading(true);
      setError("");
      const result = await decryptText(text);
      return result;
    } catch (err) {
      setError("Failed to decrypt text");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    encrypt,
    decrypt,
    loading,
    error,
  };
};
