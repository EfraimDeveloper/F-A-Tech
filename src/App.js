import Nav from './components/Nav';
import './App.css';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/about/About';
import Services from './components/service/Services';

function App() {
  return (
     <BrowserRouter>
          <Nav/>


          <Routes>
                 <Route path="/" element={<Home />} />
            <Route path='/sobre' element={<About/>}/>
            <Route path='/service' element={<Services/>}/>
          </Routes>
          
          <footer id="contact">
          <Footer/>
          </footer>
   </BrowserRouter>
                  
  );
}

export default App;
