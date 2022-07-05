import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./pages/about";
import Projects from "./pages/projects";
import Project from "./pages/project";
import { Work, Company } from "./pages/work";
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
            <Route path=":workSlug" element={<Company />} />
          </Route>
          <Route path="projects" element={<Projects />}>
            <Route path=":slug" element={<Project />} />
          </Route>
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
