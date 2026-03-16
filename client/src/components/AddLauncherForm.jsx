import { useState } from "react";

function AddLauncherForm() {
  const [name, setName] = useState("");
  const [rocketType, setRocketType] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [city, setCity] = useState("");

  async function addLauncher() {
    try {
      const result = axios.post("http://localhost:3000/api/launchers", {
        name,
        rocketType,
        latitude,
        longitude,
        city,
      });
      console.log(result.data);
    } catch (error) {
      console.error("an error occured", error);
    }
  }
  return (
    <div>
      <h1>Add a new launcher</h1>
      <form onSubmit={addLauncher}>
        <input
          type="text"
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <select
          name="reocketType"
          id="rocketType"
          onChange={(e) => setRocketType(e.target.value)}
        >
          <option value="">Choose a rocket type</option>
          <option value="Shahab3">Shahab3</option>
          <option value="Fetah110">Fetah110</option>
          <option value="Radwan">Radwan</option>
          <option value="Kheibar">Kheibar</option>
        </select>
        <input
          type="text"
          placeholder="enter the latitude "
          onChange={(e) => setLatitude(Number(e.target.value))}
        />
        <input
          type="Number"
          placeholder="enter the longitude "
          onChange={(e) => setLongitude(Number(e.target.value))}
        />
        <input
          type="text"
          placeholder="enter the city"
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Add The Launcher</button>
      </form>
    </div>
  );
}

export default AddLauncherForm;
