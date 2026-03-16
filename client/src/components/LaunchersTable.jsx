import axios from "axios";
import { useEffect, useState } from "react";
function LaunchersTable(e) {
  e.preventDefault();
  const [city, setCity] = useState("");
  const [launchers, setLaunchers] = useState([]);

  async function fetchLaunchers() {
    try {
      const result = await axios.get("http://localhost:3000/api/launchers");
      setLaunchers(result.data);
    } catch (error) {
      console.error("an error occured", error);
    }
  }
  useEffect(() => {
    fetchLaunchers();
  }, [launchers]);

  return (
    <div>
      <input type="text" onChange={(e) => setCity(e.target.value)} />
      <ul>
        {launchers.map((launcher) => (
          <li>
            <p>Name:{launcher.name}</p>
            <p>City:{launcher.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LaunchersTable;
