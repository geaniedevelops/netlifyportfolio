import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { About, Projects, Contact, Work } from './pages/pages'
import './resources/scss/app.scss'
import './resources/fonts/fonts'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
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
