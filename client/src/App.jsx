import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddLauncherPage from "./pages/AddLauncherPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<AddLauncherPage />} path="/addlauncher" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
