import { useEffect, useState } from "react";
import axios from "axios";

function Details() {
  const [launcher, setLauncher] = useState({});
  async function getLauncherById() {
    try {
      const result = await axios.get("http://localhost:3000/api/launchers/id", {
        headers: {
          id: localStorage.getItem("id"),
        },
      });
      setLauncher(result.data);
    } catch (error) {
      console.error("an error occured", error);
    }
  }
  useEffect(() => {
    getLauncherById();
  }, []);
  return (
    <div className="details-page">
      <h1>DETAILS PAGE</h1>
      <ul className="details-card">
        <li>id:{launcher._id}</li>
        <li>name:{launcher.name}</li>
        <li>rocket type:{launcher.rocketType}</li>
        <li>latitude:{launcher.latitude}</li>
        <li>longitude:{launcher.longitude}</li>
        <li>city:{launcher.city}</li>
      </ul>
    </div>
  );
}

export default Details;
