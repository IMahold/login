import React, { createContext, useState } from "react";

export const MyContext = createContext();

export default function MyContextProvider({ children }) {
  const [user, setUser] = useState("");
  const [id, setID] = useState(-1);
  const [fileName, setFileName] = useState("");

  return (
    <div>
      <MyContext.Provider
        value={{ user, setUser, id, setID, fileName, setFileName }}
      >
        {children}
      </MyContext.Provider>
    </div>
  );
}
