import Nav from './components/Nav';
import Hero from'./components/hero/Hero';
import Carousel from './components/Carousel/Carousel';
import Services from './components/service/Services';
import WebsiteServices from './components/service/WebsiteServices';
import Sites from './components/site/Sites';
import './App.css';

function App() {
  return (
    <div className="App">
          <Nav/>

          <div className='container-fluid'>
            <div className='row'>
              <div className='col-md-6'>
                <Carousel/>
              </div>

              <div className='col-md-6'>
                <Hero/>
              </div>

            </div>
          </div>
         
         
          <Services/>

          <WebsiteServices/>

          <Sites/>

    </div>
  );
}

export default App;
