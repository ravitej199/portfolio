import React from 'react'
import { useInView } from 'react-intersection-observer';


function Backend() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, 
  });




  return (
    <div ref={ref} className={`skills_content ${inView ? ' box_2' : ''}`}>
    <h3 className="skills_title">Backend</h3>
  <div className='skills_box'>
    <div className='skills_group'>
        <div className="skills_data">
        <i className="bx bx-badge-check"></i>
        
        
        <div>

        <h3 className="skills_name">Express.js</h3>
        </div>
        </div>

        <div className="skills_data">
        <i className="bx bx-badge-check"></i>
        
        
        <div>

        <h3 className="skills_name">SQL</h3>
        </div>
        </div>

        <div className="skills_data">
        <i className="bx bx-badge-check"></i>
        
        
        <div>

        <h3 className="skills_name">MongoDB</h3>
        </div>
        </div>
    </div>
    <div className='skills_group'>
        <div className="skills_data">
        <i className="bx bx-badge-check"></i>
        
        
        <div>

        <h3 className="skills_name">ASP.NET</h3>
      </div>
        </div>

      
    </div>
  </div>
</div>
  )
}

export default Backend
