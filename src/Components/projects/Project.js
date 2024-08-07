import React from 'react'
import './project.css'
import Cloudbook from './Cloudbook'
import Passwordmgr from './Passwordmgr' 
function Project() {
  return (
    <section className="projects section" id='skills'>
        <h2 className='section_title'>Projects </h2>
        <span className='section_subtitle'>My Personal Projects </span>
   
   <div className="project_container grid container">
<Cloudbook/>
<Passwordmgr/>

   </div>
   
    </section>
  )
}

export default Project
