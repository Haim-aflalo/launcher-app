import { useNavigate } from "react-router-dom";
import { useAuth } from "../states/useAuth";

function Navbar() {
  const navigate = useNavigate();
  const userType = useAuth((state) => state.userType);
  return (
    <nav className="navbar">
      {userType === "Admin" && (
        <button onClick={() => navigate("/register")}>Register</button>
      )}
      <button onClick={() => navigate("/launches")}>Launcher</button>
      {userType !== "Air Force" && (
        <button onClick={() => navigate("/addlauncher")}>Add launcher</button>
      )}
    </nav>
  );
}

export default Navbar;
