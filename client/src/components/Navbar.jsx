import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/addlauncher")}>Add launcher</button>
    </nav>
  );
}

export default Navbar;
