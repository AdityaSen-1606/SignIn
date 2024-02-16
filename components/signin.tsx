import axios from "axios";
import React, { useState } from "react";

const SignIn: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function validateReq(username: string, password: string) {
    const response = await axios
      .get("http://localhost:5000/signin", {
        params: {
          username: username,
          password: password,
        },
      })
      .then(() => console.log("Success"));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you would handle the sign-in logic, possibly sending the username
    // and password to your server for authentication.
    validateReq(username, password);
    console.log(
      `Signing in with username: ${username} and password: ${password}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
