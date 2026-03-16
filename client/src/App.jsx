import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddLauncherPage from "./pages/AddLauncherPage";
import LauncherDetailsPage from "./pages/LauncherDetailsPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AddLauncherPage />} path="/addlauncher" />
          <Route element={<LauncherDetailsPage />} path="/launcherdetails" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
