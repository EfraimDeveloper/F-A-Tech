import Hero from'../components/hero/Hero';
import Carousel from '../components/Carousel/Carousel';
import Services from '../components/service/Services';

import Sites from '../components/site/Sites';
import Plans from '../components/plans/Plans'
import Apresent from '../components/apresent/Apresents';



function Home() {
  return (
                 <>
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
         
         
         <section id="service">
          <Services/>
  
         </section>

          <Sites/>
           <Plans/>
          <Apresent/>

          {/* <Footer/> */}

      </>            
  );
}

export default Home;
