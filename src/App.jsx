import React from "react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1B1D24]">
      {/* <LoginPage/> */}
      <RegisterPage />
    </div>
  );
}

export default App;
