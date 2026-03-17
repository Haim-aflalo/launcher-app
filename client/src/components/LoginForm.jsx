import axios from "axios";
import { useState } from "react";
import { useAuth } from "../states/useAuth";
import { jwtDecode } from "jwt-decode";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const setUserType = useAuth((state) => state.setUserType);

  async function Login() {
    try {
      const result = await axios.post("http://localhost:3000/api/auth/login", {
        username,
        password,
      });
      const token = result.data.token;
      localStorage.setItem("token", token);
      const decoded = jwtDecode(token);
      setUserType(decoded.user_type);
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
      <button onClick={Login}>LOGIN</button>
    </div>
  );
}

export default LoginForm;
