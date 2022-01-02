import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import Pricing from './pages/pricing/Pricing'
import Footer from './components/footer/Footer';


function App() {


  return (
    <Router>
      <div className="App">
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
