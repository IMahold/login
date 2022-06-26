import React, { createContext, useState } from "react";

export const myContext = createContext();

export default function MyContextProvider({ children }) {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  return (
    <myContext.Provider
      value={{
        passwordType,
        passwordInput,
        handlePasswordChange,
        togglePassword,
      }}
    >
      {children}
    </myContext.Provider>
  );
}
