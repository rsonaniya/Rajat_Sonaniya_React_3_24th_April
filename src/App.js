import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignUpPage from "./Components/SignUpPage";
import ProfilePage from "./Components/ProfilePage";
import { userContext } from "./context/Usercontext";

export default function App() {
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.accessToken) {
      navigate("/profile");
    } else {
      navigate("/signup");
    }
  }, [user, navigate]);

  return (
    <Routes>
      <Route path="/" element={<h1>Homepage</h1>} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
}
