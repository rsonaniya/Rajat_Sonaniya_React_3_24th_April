import React, { useContext } from "react";
import { userContext } from "../context/Usercontext";

export default function ProfilePage() {
  const { user, setUser } = useContext(userContext);
  const handleLogout = () => {
    localStorage.clear("user");
    setUser({});
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <h4>{user.email}</h4>
      <button className="btn btn-warning" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
