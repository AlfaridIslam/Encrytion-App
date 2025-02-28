const API_URL = "http://localhost:5000/api";

export const encryptText = async (text) => {
  try {
    const response = await fetch(`${API_URL}/crypto/encrypt`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error("Encryption failed");
    }

    const data = await response.json();
    return data.encryptedText;
  } catch (error) {
    console.error("Error encrypting text:", error);
    throw error;
  }
};

export const decryptText = async (text) => {
  try {
    const response = await fetch(`${API_URL}/crypto/decrypt`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error("Decryption failed");
    }

    const data = await response.json();
    return data.decryptedText;
  } catch (error) {
    console.error("Error decrypting text:", error);
    throw error;
  }
};
