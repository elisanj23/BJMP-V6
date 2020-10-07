import React from 'react'

export default ({}) => (
  <>
    <div className="footer-strip">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer">
              <h3 className="footer-title">BJMPSLAI</h3>
              <ul className="footer-menu">
                <li>
                  <a aria-current="page" className="" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/contact-us">Contact</a>
                </li>
                <li className="copyright">
                  ©{/* */} {/* */}2020{/* */} {/* */}BJMPSLAI
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="sub-footer-strip">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sub-footer">
              <ul>
                <li>
                  <strong>Phone: </strong>{' '}
                  <a href="tel:799 2576 - (0917) 858 7163">
                    799 2576 - (0917) 858 7163
                  </a>
                </li>
                <li>
                  <strong> Address:</strong>
                  <a
                    href="https://www.google.com.my/maps/place/144+Mindanao+Avenue,+Project+8,+Quezon+City,+1106+Metro+Manila,+Philippines/@14.6695962,121.0308537,17z/data=!3m1!4b1!4m5!3m4!1s0x3397b6df5a51e295:0xcbe29072ea496636!8m2!3d14.6695962!4d121.0330424?shorturl=1"
                    target="__blank"
                  >
                    144 Mindanao Avenue, Project 8, Quezon City, Philippines
                    1106
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="http://bjmpslai.com/" target="__blank">
                    {' '}
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>

                <li>
                  <a href="mailto:bjmpslai@yahoo.com.ph" target="__blank">
                    <i className="far fa-envelope"></i>
                  </a>
                </li>
                {/* <li>
                  <a href="http://bjmpslai.com/">bjmpslai.com</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
