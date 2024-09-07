import { Route, Routes, BrowserRouter, HashRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";
import Homechild from "./Homechild";
function App() {
  return (
    <div className="App">
      <div>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />}>
              {" "}
              <Route path="/Homechild" element={<Homechild />} />
              <Route path="/About" element={<About />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="/Contact" element={<Contact />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
