import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LaunchersPage from "./pages/LaunchersPage";
import AddLauncherPage from "./pages/AddLauncherPage";
import LauncherDetailsPage from "./pages/LauncherDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginPage />} path="/" />

          <Route element={<ProtectedRoutes authorized={["Admin"]} />}>
            <Route element={<RegisterPage />} path="/register" exact />
          </Route>

          <Route
            element={
              <ProtectedRoutes
                authorized={["Admin", "Intelligence", "Air Force"]}
              />
            }
          >
            <Route element={<LaunchersPage />} path="/launchers" exact />
          </Route>

          <Route
            element={<ProtectedRoutes authorized={["Admin", "Intelligence"]} />}
          >
            <Route element={<AddLauncherPage />} path="/addlauncher" exact />
          </Route>
          <Route
            element={
              <ProtectedRoutes
                authorized={["Admin", "Intelligence", "Air Force"]}
              />
            }
          >
            <Route
              element={<LauncherDetailsPage />}
              path="/launcherdetails"
              exact
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
