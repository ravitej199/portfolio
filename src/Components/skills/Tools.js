import React from 'react'
import { useInView } from 'react-intersection-observer';

function Tools() {

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, 
  });

  return (
    <div ref={ref} className={`skills_content ${inView ? ' box_1' : ''}`}>
    <h3 className="skills_title">Tools</h3>
  <div className='skills_box'>
    <div className='skills_group'>
        <div className="skills_data">
        <i className="bx bx-badge-check"></i>
        
        
        <div>

        <h3 className="skills_name">Git</h3>
        </div>
        </div>

        <div className="skills_data">
        <i className="bx bx-badge-check"></i>
        
        
        <div>

        <h3 className="skills_name">GitHub</h3>
        </div>
        </div>

        <div className="skills_data">
        <i className="bx bx-badge-check"></i>
        
        
        <div>

        <h3 className="skills_name">Ajax</h3>
        </div>
        </div>
    </div>
  </div>
</div>
  )
}

export default Tools
