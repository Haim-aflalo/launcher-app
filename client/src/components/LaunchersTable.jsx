import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../states/useAuth";

function LaunchersTable() {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [rocketType, setRocketType] = useState("");
  const [launchers, setLaunchers] = useState([]);
  const userType = useAuth((state) => state.userType);

  async function fetchLaunchers() {
    try {
      const result = await axios.get("http://localhost:3000/api/launchers");
      setLaunchers(result.data);
    } catch (error) {
      console.error("an error occured", error);
    }
  }

  async function removeLauncher(id) {
    try {
      const result = await axios.delete(
        `http://localhost:3000/api/launchers/${id}`,
      );
      setLaunchers(launchers.filter((launcher) => launcher._id !== id));
    } catch (error) {
      console.error("an error occured", error);
    }
  }

  function navToDetails(id) {
    localStorage.setItem("id", id);
    navigate("/launcherdetails");
  }

  useEffect(() => {
    fetchLaunchers();
  }, [rocketType, city]);

  return (
    <div className="table">
      <h1>ALL LAUNCHERS</h1>

      <input
        type="text"
        placeholder="filter by city"
        onChange={(e) => setCity(e.target.value)}
      />
      <select
        name="reocketType"
        id="rocketType"
        onChange={(e) => setRocketType(e.target.value)}
      >
        <option value="">Choose a rocket type</option>
        <option value=""> all rocket type</option>
        <option value="Shahab3">Shahab3</option>
        <option value="Fetah110">Fetah110</option>
        <option value="Radwan">Radwan</option>
        <option value="Kheibar">Kheibar</option>
      </select>

      <ul>
        {launchers
          .filter((launcher) => launcher.city === city || city === "")
          .filter(
            (launcher) =>
              launcher.rocketType === rocketType || rocketType === "",
          )
          .map((launcher) => (
            <li key={launcher._id} className="launcher-card">
              <p>Name: {launcher.name}</p>
              <p>City: {launcher.city}</p>
              <p>rocket type: {launcher.rocketType}</p>
              <button onClick={() => navToDetails(launcher._id)}>
                Get details
              </button>
              {userType !== "Air Force" && (
                <button onClick={() => removeLauncher(launcher._id)}>
                  remove launcher
                </button>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default LaunchersTable;
