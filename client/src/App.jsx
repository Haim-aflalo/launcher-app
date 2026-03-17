import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LaunchersPage from "./pages/LaunchersPage";
import AddLauncherPage from "./pages/AddLauncherPage";
import LauncherDetailsPage from "./pages/LauncherDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginPage />} path="/" />
          <Route element={<RegisterPage />} path="/register" />
          <Route element={<LaunchersPage />} path="/launchers" />
          <Route element={<AddLauncherPage />} path="/addlauncher" />
          <Route element={<LauncherDetailsPage />} path="/launcherdetails" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
