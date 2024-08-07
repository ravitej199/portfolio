import React from 'react'
import './contact.css'
function Contact() {
  return (
    <div>
        <section className="contact section" id="contact">
            <h2 className="section_title">Get in touch</h2>

            <span className='section_subtitle'>Contact Me</span>
            <div className='contact_container container grid'>
                <div className="contact_content">
                    <h3 className="contact_title">Contact through</h3>
                    <div className="contact_info">
                        <div className="contact_card">
                            <i className="bx bx-mail-send contact_card-icon"></i>
                            <h3 className="contact_card-title">
                            Email
                            </h3>
                            <span className="contact_card-data">
                            ravitejravi90@gmail.com
                            </span>
                            <a href="mailto:ravitejravi90@gmail.com" className="contact_button">
                                Write me a message <i className="bx bx-right-arrow-alt contact_button-icon">
                                    
                                </i>
                            </a>
                        </div>
                        <div className="contact_card">
                            <i className="uil uil-whatsapp contact_card-icon"></i>
                            <h3 className="contact_card-title">
                                Whatsapp
                            </h3>
                            <span className="contact_card-data">
                                   9483216673
                            </span>
                            <a href="https://api.whatsapp.com/send?phone=919483216673&text=Hello" className="contact_button">
                          
                                Write me a message <i className="bx bx-right-arrow-alt contact_button-icon">

                                </i>
                            </a>
                        </div>
                      
                    </div>
                </div>

                {/* <div className="contact_content">
                    <h3 className='contact_title'>Write a Message</h3>
                        <form action="" className="contact_form">
                            <div className="contact_form-div">

                            <label htmlFor="email" className="contact_form-tag">Mail</label>
                            <input type="email" name='email' id='email' className='contact_form_input' placeholder='insert your email'/>
                            </div>
                            <div className="contact_form-div">

                            <label htmlFor="name" className="contact_form-tag">Name</label>
                            <input type="text" name='name' id='name' className='contact_form_input' placeholder='inser your Name'/>
                            </div>
                        </form>
                </div> */}
            </div>
        </section>
      
    </div>
  )
}

export default Contact
