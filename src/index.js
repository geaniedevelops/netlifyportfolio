import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import './resources/scss/app.scss';
import About from "./pages/About";
import Projects from "./pages/projects/Projects";
import Project from "./pages/projects/Project";
import Work from "./pages/work/Work";
import Examples from "./pages/work/Examples";
import Contact from "./pages/Contact";
import Main from "./pages/main/Main";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Main />} >
      <Route
        path="*"
        element={
          <main>
            <p>There's nothing here!</p>
          </main>
        }
        />
    </Route>
    <Route path="/about" element={<About />} />
    <Route path="/work" element={<Work />} />
    <Route path="/work/:slug" element={<Examples />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/projects/:slug" element={<Project />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
);
