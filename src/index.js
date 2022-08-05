import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './resources/scss/app.scss'
import About from './pages/About'
import Projects from './pages/projects/Projects'
import Project from './pages/projects/Project'
import Work from './pages/work/Work'
import Examples from './pages/work/Examples'
import Contact from './pages/Contact'
import Main from './pages/main/Main'
import App from './App'
import './resources/fonts/StickyPops.otf'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
        <Route path="/:page" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<Examples />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
