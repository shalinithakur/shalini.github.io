
import {
  Link
} from "react-router-dom";
function Sidebar() {
return (
<>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" to="/page-top">
                <span className="d-block d-lg-none">Clarence Taylor</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="{profile.jpg}" alt="..." /></span>
            </a>
           
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/experience">Experience</Link></li>
              <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/education">Education</Link></li>
              <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/skills">Skills</Link></li>
              <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/interests">Interests</Link></li>
              <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/awards">Awards</Link></li>
            
            
             </ul>
              </div>
     
        </nav>

        
              
  </>
);
}

export default Sidebar;
