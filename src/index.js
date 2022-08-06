import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './resources/scss/app.scss'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Work from './pages/work/Work'
import Contact from './pages/contact/Contact'
import Main from './pages/main/Main'
import App from './App'
import './resources/fonts/StickyPops.otf'
import './resources/fonts/Pixel.ttf'
import './resources/fonts/PixelCondensed.ttf'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/welcome" element={<Main />} />
        <Route path="/about" element={<About />}>
          <Route path="/about/:slug" element={<About />} />
        </Route>
        <Route path="/work" element={<Work />} />
        <Route path="/work/:slug" element={<Work />} />
        <Route path="/projects" element={<Projects />}>
          <Route path="/projects/:slug" element={<Projects />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
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
  </BrowserRouter>,
)
