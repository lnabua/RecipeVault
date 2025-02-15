import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
      <CssBaseline />
      <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}>
        <Navbar />
      </div>
    </>
  )
}

export default App
