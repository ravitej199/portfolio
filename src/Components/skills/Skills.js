import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
import Tools from './Tools'
import './skills.css'
import Programminglang from './Programminglang'
function Skills() {
  return (
    <section className="skills section" id='skills'>
        <h2 className='section_title'>Skills </h2>
        <span className='section_subtitle'>My technical levels </span>
   
   <div className="skills_container grid container">
<Frontend/>
<Backend/>
<Tools/>
<Programminglang/>
   </div>
   
    </section>
  )
}

export default Skills
