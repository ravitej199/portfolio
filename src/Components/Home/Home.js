import React from 'react'
import "./home.css";
import Social from './Social';
import Data from './Data';

function Home() {
  return (
    <section className="home section" id="home">
        <div className="home_container container">
            <div className="home_content">
              <Social/>
              <div className='details'>
               <div className="home_info">
              <Data/>
              </div>
              <div className='home_img'>

              </div>
            
              
              </div>
              
            </div>
            
        </div>

    </section>

    
  )
}

export default Home
