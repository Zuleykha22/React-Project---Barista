import React from 'react'
import '../Footer/Footer.scss'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div>
      <div className="footer">


        <div className="opening-hours">
          <div className="header-top-text">
            <p>OPENING HOURS</p>
          </div>

          <div className="day-and-status">
            <span className='week-day'>MONDAY</span>
            <span className='line-box'></span>
            <span className='status closed'>CLOSED</span>
          </div>

          <div className="day-and-status">
            <span className='week-day'>TUESDAY</span>
            <span className='line-box'></span>
            <span className='status'>9:00 - 22:00</span>
          </div>

          <div className="day-and-status">
            <span className='week-day'>WEDNESDAY</span>
            <span className='line-box'></span>
            <span className='status'>9:00 - 22:00</span>
          </div>

          <div className="day-and-status">
            <span className='week-day'>FRIDAY *</span>
            <span className='line-box'></span>
            <span className='status'>9:00 - 1:00</span>
          </div>

          <div className="day-and-status">
            <span className='week-day'>SATURDAY *</span>
            <span className='line-box'></span>
            <span className='status'>12:00 - 01:00</span>
          </div>

          <div className="day-and-status">
            <span className='week-day'>SUNDAY</span>
            <span className='line-box'></span>
            <span className='status'>9:00 - 22:00</span>
          </div>

        </div>

        <div className="latest-posts">
          <div className="header-top-text">
            <p>LATEST POSTS</p>
          </div>

          <div className="post">
            <h4>EXPAND YOUR MIND, CHANGE EVERYTHING</h4>
            <h5>14.02.2017</h5>
          </div>

          <div className="post">
            <h4>PLACES TO GET LOST</h4>
            <h5>14.02.2017</h5>
          </div>

          <div className="post">
            <h4>LEWIS HOWES</h4>
            <h5>14.02.2017</h5>
          </div>

          <div className="post">
            <h4>ELEVATE YOUR EXPECTATIONS</h4>
            <h5 className='last-post'>14.02.2017</h5>
          </div>
        </div>

        <div className="contact-us">
          <div className="header-top-text">
            <p>CONTACT US</p>
          </div>

          <div className="contact-details">
            <h5 className='email-address'>barista@qodeinteractive.com</h5>
            <h5>1-444-123-4559</h5>
            <h5>Raymond Boulevard 224,</h5>
            <h5>New York</h5>
          </div>
          <div className="header-top-text">
            <p>THE LAST STANDARD POST</p>
          </div>
          <div className="input-box">
            <input type="email" placeholder='Your E-mail' />
            <span><ArrowRightIcon className='arrow-right-footer' /></span>
          </div>

        </div>

        <div className="other-locations">
          <div className="header-top-text">
            <p>OTHER LOCATIONS</p>
          </div>
          <div className="address">
            <h4>BARISTA COFFEE SHOP</h4>
            <h5>2606 Saints Alley</h5>
            <h5>Tampa, FL 33602</h5>
          </div>
          <div className="address address-no-border">
            <h4>BARISTA CAFE</h4>
            <h5>3497 Watson Street</h5>
            <h5>Camden, NJ 08102</h5>
          </div>
        </div>

        
        

      </div>
      <div className="footer-bottom">
          <p>© Qode Interactive</p>
          <div className="footer-icons">
            <InstagramIcon className='footer-icon'/>
            <TwitterIcon className='footer-icon' />
            <FacebookIcon className='footer-icon' />
            <LinkedInIcon className='footer-icon' />
          </div>
          <p>2017 All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer