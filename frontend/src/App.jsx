import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {

  return (
    <>
      <CssBaseline />
      <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
