import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Project from './components/Project'


function App() {
  return (
        <Router>
          <div style={{display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw'}}>
            <Nav />
              <Routes>
                <Route 
                  path="/aboutme" 
                  element={<About/>}
                />
                <Route 
                  path="/" 
                  element={<Home/>}
                />
                <Route 
                  path="/contact" 
                  element={<Contact/>}
                />
                <Route 
                  path="/projects" 
                  element={<Project/>}
                />
              </Routes>
            <Footer />
          </div>
        </Router>
  )
}

export default App;
