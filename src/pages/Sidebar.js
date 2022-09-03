import '../App.css';
import logo from "../assets/logo192.png";
import profile from "../assets/profile.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleNotch, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
export default function Sidebar(){
    return(
        <>
         <section className="sidebar">
      <ul>
      <li>
      <div className='sidebar-element1 is-active'>
      <img src={logo} alt="company-logo" />
        <h3>SmartUp</h3>
        <FontAwesomeIcon icon={faBars} />
      </div>
      </li>
      <li>
        <div className="sidebar-element1 is-active">
         <img src={profile} alt="profile-logo" />
         <h3>Profile</h3>
         <FontAwesomeIcon icon={faBars} />
        </div>
      </li>
      <li>
        <div className='sidebar-element2 is-active'>
        <FontAwesomeIcon icon={faBars} style={{ "width":"32px" }} />
         <span className='sidebar-text'>Discover</span>
         
        </div>
      </li>
      <li>
      <div className='sidebar-element2 is-active'>
        <FontAwesomeIcon icon={faCircleNotch} style={{ "width":"32px" }} />
         <span className='sidebar-text'>SmartUp</span>
        </div>
      </li>
      <li>
       <div className='sidebar-element3'>
        <div className="is-active">
        <img src={profile} alt="profile-logo" />
        <span className='sidebar-text'>main community</span>
        </div>
        <div className="is-active">
        <img src={profile} alt="profile-logo" />
        <span className='sidebar-text'>run community</span>
        </div>
        <div className="is-active">
        <img src={profile} alt="profile-logo" />
        <span className='sidebar-text'>tech community</span>
        </div>
        <div className="is-active">
        <img src={profile} alt="profile-logo" />
        <span className='sidebar-text'>lead community</span>
        </div>
       </div>
      </li>
      <li>
      <div className='sidebar-element2 is-active'>
        <FontAwesomeIcon icon={faUser} style={{ "width":"32px" }} />
         <span className='sidebar-text'>Personal</span>
        </div>
      </li>
      <li>
        <div className="sidebar-element4 need-padding">
          <div>
           <p>InProgress</p>
           <p>156</p>
          </div>
          <div>
           <p>Completed</p>
           <p>65</p>
          </div>
          <div>
           <p>Not Comply</p>
           <p>28</p>
          </div>
        </div>
      </li>
      </ul>
      <div className='sidebar-footer'>
        <div className='sidebar-links need-padding'>
        <div className="need-padding" >
        <a href='https://www.google.com' target="_blank" rel="noreferrer">About SmartUp</a>
        </div>
        <div>
         <a href='https://www.google.com' target="_blank" rel="noreferrer">Send Feedback</a>
        </div>
        <div>
         <a href='https://www.google.com' target="_blank" rel="noreferrer">Terms Of Contract</a>
        </div>
        <div>
         <a href= "https://www.google.com" target="_blank" rel="noreferrer">Privacy Poicy</a>
        </div>
      </div>
          
      <div className='sidebar-social'>
        <a href="https://www.linkedin.com/in/ishangupta8909/">
         <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a  href="https://www.facebook.com/ishan.gupta0506/">
         <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.instagram.com/_ishangupta_/">
         <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://github.com/ishangupta8909/" >
         <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <p className='copyright'>Copyright © 2022</p>
      </div>
      </section>
        </>
    );
}