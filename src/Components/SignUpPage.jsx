import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../context/Usercontext";
import { useNavigate } from "react-router-dom";

const generateRandomString = () => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export default function SignUpPage() {
  const navigate = useNavigate();
  const { setUser, user } = useContext(userContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user.accessToken) {
      navigate("/Rajat_Sonaniya_React_3_24th_April/profile");
    }
  }, [user, navigate]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name && email && password) {
      const newUser = { name, email, password, accessToken: generateRandomString() };
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
      setName("");
      setEmail("");
      setPassword("");
      navigate("/Rajat_Sonaniya_React_3_24th_April/profile");
    } else {
      alert("No field should be empty");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label htmlFor="fullName" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
