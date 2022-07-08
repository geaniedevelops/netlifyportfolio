import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/about";
import Projects from "./pages/projects/projects";
import Project from "./pages/projects/project";
import Work from "./pages/work/work";
import Examples from "./pages/work/examples";
import Contact from "./pages/contact";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} >
            <Route path=":slug" element={<Examples />} />
          </Route>
          <Route path="projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<Project />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <main>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
    </Routes>
  </BrowserRouter>
);
