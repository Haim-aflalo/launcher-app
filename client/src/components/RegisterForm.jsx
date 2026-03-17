import axios from "axios";
import { useState, useEffect } from "react";
import { useAuth } from "../states/useAuth";
function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user_type, setUser_Type] = useState("");
  const [users, setUsers] = useState([]);
  const [flag, setFlag] = useState(false);
  const [toUpdate, setToUpdate] = useState(false);
  const userType = useAuth((state) => state.userType);

  async function fetchUsers() {
    try {
      const result = await axios.get(
        "http://localhost:3000/api/auth/getAllUsers",
        {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        },
      );
      setUsers(result.data);
    } catch (error) {
      console.error("an error occured", error);
    }
  }

  async function removeUser(id) {
    try {
      const result = await axios.delete(
        `http://localhost:3000/api/auth/register/delete/${id}`,
        {
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        },
      );
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("an error occured", error);
    }
  }
  async function updateUser(id) {
    try {
      const url = "http://localhost:3000/api/auth/register/update";
      const body = { id, username, password, email, user_type };
      const headers = {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const result = await axios.put(url, body, headers);
      console.log(result.data);

      setFlag(!flag);
    } catch (error) {
      console.error("an error occured", error);
    }
  }

  async function Register() {
    try {
      const url = "http://localhost:3000/api/auth/register/create";
      const body = { username, password, email, user_type };
      const headers = {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const result = await axios.post(url, body, headers);
      setFlag(!flag);
    } catch (error) {
      console.error("an error occured", error);
    }
  }
  useEffect(() => {
    fetchUsers();
  }, [flag]);
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
      <input
        type="email"
        placeholder="enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <select
        name="user_type"
        id="user_type"
        onChange={(e) => setUser_Type(e.target.value)}
      >
        <option value="">Choose a user type</option>
        <option value="Admin">Admin</option>
        <option value="Intelligence">Intelligence</option>
        <option value="Air Force">Air Force</option>
      </select>
      <button type="submit" onClick={Register}>
        Register
      </button>
      <ul>
        {users.map((user) => (
          <li key={user._id} className="user-card">
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
            <p>Email: {user.email}</p>
            <p>Type: {user.user_type}</p>
            <button
              onClick={() => {
                setToUpdate(!toUpdate);
              }}
            >
              Edit
            </button>
            {toUpdate && (
              <div>
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
                <input
                  type="email"
                  placeholder="enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <select
                  name="user_type"
                  id="user_type"
                  onChange={(e) => setUser_Type(e.target.value)}
                >
                  <option value="">Choose a user type</option>
                  <option value="Admin">Admin</option>
                  <option value="Intelligence">Intelligence</option>
                  <option value="Air Force">Air Force</option>
                </select>
                <button type="submit" onClick={() => updateUser(user._id)}>
                  Send
                </button>
              </div>
            )}
            {userType !== "Air Force" && (
              <button onClick={() => removeUser(user._id)}>remove user</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RegisterForm;
