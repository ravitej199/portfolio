import React from 'react'

function Cloudbook() {
  return (
    <div className='project_content'>
    <h3 className="project_title">CloudBook</h3>
    <div className="project_info project_box">
        <div className="proj_img proj_img_cloudbook">

        </div>
        <p className="about_proj">
        Full-stack notes app using React, Node.js, and MongoDB. Supports CRUD operations, tag filtering, and user
        authentication

        </p>

        <div className="project_links">
        <a href="https://github.com/ravitej199/cloudbook-backend" rel="noopener noreferrer" target='_blank' className="button button_flex proj_button">
            Github
           
        </a>
        <a href="https://cloudbook-eight.vercel.app/" target='_blank' rel="noopener noreferrer" className="button button_flex proj_button">
            Live
           
        </a>
        </div>
    </div>
  
</div>
  )
}

export default Cloudbook
