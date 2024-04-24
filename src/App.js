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
      navigate("/Rajat_Sonaniya_React_3_24th_April/profile");
    } else {
      navigate("/Rajat_Sonaniya_React_3_24th_April/signup");
    }
  }, [user, navigate]);

  return (
    <Routes>
      <Route path="/Rajat_Sonaniya_React_3_24th_April" element={<h1>Homepage</h1>} />
      <Route path="/Rajat_Sonaniya_React_3_24th_April/signup" element={<SignUpPage />} />
      <Route path="/Rajat_Sonaniya_React_3_24th_April/profile" element={<ProfilePage />} />
    </Routes>
  );
}
