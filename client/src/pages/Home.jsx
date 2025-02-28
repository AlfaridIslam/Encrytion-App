import React from "react";
import EncryptionForm from "../components/Encryption/EncryptionForm";
import DecryptionForm from "../components/Encryption/DecryptionForm";
import MainLayout from "../components/Layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Secure Text Encryption & Decryption
          </h2>
          <p className="text-gray-700 mb-2">
            Use this tool to securely encrypt your sensitive messages and
            decrypt them when needed.
          </p>
          <p className="text-gray-700 mb-4">
            All encryption and decryption happens on the server using AES
            encryption algorithm.
          </p>
        </div>

        <EncryptionForm />
        <DecryptionForm />
      </div>
    </MainLayout>
  );
};

export default Home;
