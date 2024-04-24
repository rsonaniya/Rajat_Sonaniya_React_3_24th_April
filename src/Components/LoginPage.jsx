import React, { useContext } from "react";
import { userContext } from "../context/Usercontext";

export default function LoginPage() {
  const { user, setUser } = useContext(userContext);

  return (
    <>
      <p>{user.name}</p>
      <button onClick={() => setUser({ name: "New User" })}>Set New User</button>
    </>
  );
}
