import { Navigate } from "react-router-dom";
import { useAuth } from "../states/useAuth";

function ProtectedRoutes(props) {
  const { authorized } = props;
  const userType = useAuth((state) => state.userType);
  if (userType === "") {
    return <Navigate to="/" replace />;
  }
  if (!authorized.includes(userType)) {
    return <Navigate to="/" replace />;
  }
}
export default ProtectedRoutes;
