import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getData } from "./serves/dataHandler";
import Home from "./pages/Home";
import About from "./pages/About";
import SiteHeader from "./cmps/SiteHeader";

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <Routes>
        <Route path="/home" element={<Home data={getData()} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
