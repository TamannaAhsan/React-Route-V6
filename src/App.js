import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Errors from './pages/Errors'
import Navbar from './pages/Navbar'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {< Navbar />}>
          <Route index element = {< Home />}/>
          <Route path = "about" element = {< About />}/>
          <Route path = "contact" element = {< Contact />}/>
          <Route path = "*" element = {< Errors />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
