import LoginForm from "../components/LoginForm";
import { useAuth } from "../states/useAuth";
import Navbar from "../components/Navbar";

function LoginPage() {
  const userType = useAuth((state) => state.userType);
  return (
    <>
      {userType !== "" && <Navbar />}
      <LoginForm />
    </>
  );
}

export default LoginPage;
