import React, { createContext, useContext, useState } from "react";

const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [lastEncrypted, setLastEncrypted] = useState("");
  const [lastDecrypted, setLastDecrypted] = useState("");

  const value = {
    lastEncrypted,
    setLastEncrypted,
    lastDecrypted,
    setLastDecrypted,
  };

  return (
    <CryptoContext.Provider value={value}>{children}</CryptoContext.Provider>
  );
};

export const useCryptoContext = () => {
  const context = useContext(CryptoContext);
  if (context === undefined) {
    throw new Error("useCryptoContext must be used within a CryptoProvider");
  }
  return context;
};