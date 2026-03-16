import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <button onClick={() => navigate("/home")}>Home</button>
      <button onClick={() => navigate("/addlauncher")}>Add launcher</button>
      <button onClick={() => navigate("/launcherdetails")}>
        Launcher details
      </button>
    </nav>
  );
}

export default Navbar;
