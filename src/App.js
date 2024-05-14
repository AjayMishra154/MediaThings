import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact';
import NotFound from './components/NotFound'

const App = () => (
  <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path='/contactUs' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
)

export default App;
