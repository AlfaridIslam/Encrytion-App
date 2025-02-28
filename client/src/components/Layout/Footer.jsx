import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} Text Encryption & Decryption Tool</p>
      </div>
    </footer>
  );
};

export default Footer;
