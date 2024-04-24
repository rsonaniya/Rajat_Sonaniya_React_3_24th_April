import React, { useEffect, useState } from "react";
import { userContext } from "./Usercontext";
export default function UserContextProvider({ children }) {
  let localStorageUser = localStorage.getItem("user");
  const [user, setUser] = useState(localStorageUser ? JSON.parse(localStorageUser) : {});

  return <userContext.Provider value={{ user, setUser }}>{children}</userContext.Provider>;
}
