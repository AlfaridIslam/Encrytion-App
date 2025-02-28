import React, { useState, useEffect } from "react";
import TextArea from "../common/TextArea";
import Button from "../common/Button";
import Card from "../common/Card";
import { decryptText } from "../../api/cryptoService";

const DecryptionForm = () => {
  const [encryptedInput, setEncryptedInput] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTextChange = (e) => {
    setEncryptedInput(e.target.value);
    setError("");
  };

  useEffect(() => {
    const decryptTextWithDelay = async () => {
      if (encryptedInput.trim() === "") {
        setDecryptedText("");
        return;
      }

      try {
        setLoading(true);
        setError("");
        const result = await decryptText(encryptedInput);
        setDecryptedText(result);
      } catch (err) {
        setError(
          "Failed to decrypt text. Please ensure you have entered valid encrypted text."
        );
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    // Use a delay to avoid excessive API calls while typing
    const timeoutId = setTimeout(() => {
      if (encryptedInput) {
        decryptTextWithDelay();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [encryptedInput]);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(decryptedText)
      .then(() => {
        alert("Decrypted text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <Card title="Decryption">
      <TextArea
        label="Enter encrypted text to decrypt"
        value={encryptedInput}
        onChange={handleTextChange}
        placeholder="Paste encrypted text here..."
        name="encryptedInput"
        rows={4}
      />

      <TextArea
        label="Decrypted result"
        value={decryptedText}
        placeholder={
          loading ? "Decrypting..." : "Decrypted text will appear here"
        }
        disabled={true}
        name="decryptedText"
        rows={4}
      />

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="flex justify-end">
        <Button
          onClick={copyToClipboard}
          disabled={!decryptedText}
          className="bg-green-500 hover:bg-green-600"
        >
          Copy Decrypted Text
        </Button>
      </div>
    </Card>
  );
};

export default DecryptionForm;