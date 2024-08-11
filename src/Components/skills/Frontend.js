import React from 'react'
import { useInView } from 'react-intersection-observer';
function Frontend() {


    const { ref, inView } = useInView({
      threshold: 0.1,
      triggerOnce: true, 
    });

  return (
    <div ref={ref} className={`skills_content ${inView ? ' box_1' : ''}`}>
        <h3 className="skills_title">Frontend</h3>
      <div className='skills_box'>
        <div className='skills_group'>
            <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            
            
            <div>

            <h3 className="skills_name">HTML</h3>
            </div>
            </div>

            <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            
            
            <div>

            <h3 className="skills_name">CSS</h3>
            </div>
            </div>

            <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            
            
            <div>

            <h3 className="skills_name">Tailwind CSS</h3>
           </div>
            </div>
        </div>
        <div className='skills_group'>
            <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            
            
            <div>

            <h3 className="skills_name">JavaScript</h3>
            </div>
            </div>

            <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            
            
            <div>

            <h3 className="skills_name">React.js</h3>
            </div>
            </div>

            <div className="skills_data">
            <i className="bx bx-badge-check"></i>
            
            
            <div>

            <h3 className="skills_name">Redux Toolkit</h3>
           </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Frontend
