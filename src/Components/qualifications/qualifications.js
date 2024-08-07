import "./qualifications.css";

import React from "react";

function Qualifications() {

  return (
    <section className="qualification section">
      <h2 className="section_title">Qualifications</h2>
      <span className="section_subtitle">My personel journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div className="qualification_button button--flex">
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>
          <div className="qualification_button button--flex">
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div className="qualification_content">
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Pre-University</h3>
                <span className="qualification_subtitle">
                  Mahesh PU College
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>
                  2017-2019
                </div>
              </div>

              <div className="line_height_set">
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>
            {/* <div className="qualification_data">
            <div></div>
            <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
            </div>
            <div>
                <h3 className='qualification_title'></h3>
                <span className="qualification_subtitle">K.L.E Institute of Technology</span>
                <div className="qualification_calender">
                <i className="uil uil-calendar-alt"></i>
                    2019-2023
                </div>
            </div>
           

           
        </div> */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  B.E Computer Science Engineering
                </h3>
                <span className="qualification_subtitle">
                  K.L.E Institute of Technology
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>
                  2019-2023
                </div>
              </div>

              <div className="line_height_set">
                <span className="qualification_rounder"></span>
                <div className="qualification_line"></div>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div className="line_height_set">
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Full Stack Developer</h3>
                <span className="qualification_subtitle">Vegam solutions</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>
                  Feb 2023 - Jan 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualifications;
