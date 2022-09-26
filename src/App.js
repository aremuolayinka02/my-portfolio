import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import Leftbar from './components/Leftbar'
import Rightbar from './components/Rightbar'
import Works  from './pages/Works';
import Contact  from './pages/Contact';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';

function App() {

  return (
    <div className="App">
      
      {/* Imported the Sidebars here */}
      <Leftbar />
      <Rightbar />

    
          <BrowserRouter>

            <Navbar />

              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/works" element={<Works />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>

            <Footer />
          </BrowserRouter>

       

    </div>
  );
}

export default App;
