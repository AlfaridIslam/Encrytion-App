import React from "react";
import Home from "./pages/Home";
import { CryptoProvider } from "./context/CryptoContext";

function App() {
  return (
    <CryptoProvider>
      <div className="App">
        <Home />
      </div>
    </CryptoProvider>
  );
}

export default App;
