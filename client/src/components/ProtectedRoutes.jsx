import { Navigate } from "react-router-dom";
import { useAuth } from "../states/useAuth";

function ProtectedRoutes(props) {
  const userType = useAuth((state) => state.userType);
  if (userType === "") {
    <Navigate to="/" replace />;
  }
  if (!props.authorized.includes(userType)) {
    <Navigate to="/" replace />;
  }
}
export default ProtectedRoutes;
