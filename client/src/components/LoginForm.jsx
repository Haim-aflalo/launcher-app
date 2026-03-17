import axios from "axios";
import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function Login() {
    try {
      const result = await axios.post("http://localhost:3000/api/auth/login", {
        username,
        password,
      });
      localStorage.setItem("token",  result.data.token);
    } catch (error) {
      console.error("an error occured", error);
    }
  }
  return (
    <div className="login-form">
      <h1>LOGIN</h1>
      <input
        type="text"
        placeholder="enter your username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => Login}></button>
    </div>
  );
}

export default LoginForm;
