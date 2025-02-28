import React, { useState, useEffect } from "react";
import TextArea from "../common/TextArea";
import Button from "../common/Button";
import Card from "../common/Card";
import { encryptText } from "../../api/cryptoService";

const EncryptionForm = () => {
  const [plainText, setPlainText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTextChange = (e) => {
    setPlainText(e.target.value);
    setError("");
  };

  useEffect(() => {
    const encryptTextWithDelay = async () => {
      if (plainText.trim() === "") {
        setEncryptedText("");
        return;
      }

      try {
        setLoading(true);
        setError("");
        const result = await encryptText(plainText);
        setEncryptedText(result);
      } catch (err) {
        setError("Failed to encrypt text. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    // Use a delay to avoid excessive API calls while typing
    const timeoutId = setTimeout(() => {
      if (plainText) {
        encryptTextWithDelay();
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [plainText]);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(encryptedText)
      .then(() => {
        alert("Encrypted text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <Card title="Encryption" className="mb-8">
      <TextArea
        label="Enter text to encrypt"
        value={plainText}
        onChange={handleTextChange}
        placeholder="Type your message here..."
        name="plainText"
        rows={4}
      />

      <TextArea
        label="Encrypted result"
        value={encryptedText}
        placeholder={
          loading ? "Encrypting..." : "Encrypted text will appear here"
        }
        disabled={true}
        name="encryptedText"
        rows={4}
      />

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="flex justify-end">
        <Button
          onClick={copyToClipboard}
          disabled={!encryptedText}
          className="bg-green-500 hover:bg-green-600"
        >
          Copy Encrypted Text
        </Button>
      </div>
    </Card>
  );
};

export default EncryptionForm;
