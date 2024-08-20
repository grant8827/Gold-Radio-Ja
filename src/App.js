import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/header/Navbar';
import Home from './component/pages/Home';
import About from './component/pages/About';
import Schedule from './component/pages/Schedule';
import Contact from './component/pages/Contact';
import Footer from './component/compViews/Footer';
function App() {
  return (
    <Router>
      
<div className="App">
     <Navbar/>
    </div>
    <Routes>
     <Route path='/' element = {<Home />}/>
     <Route path='About' element = {<About/>}/>
     <Route path='Schedule' element = {<Schedule/>}/>
     <Route path='Contact' element = {<Contact/>}/>
    </Routes>
    <Footer/>
    </Router>
    
  );
}

export default App;
