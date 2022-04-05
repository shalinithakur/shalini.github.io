import About from './About'
import Experience from './Experience'
import Education from './Education';
import Skills from './Skills';
import Interests from './Interests';
import Awards from './Awards';
import {
 
    Link
  } from "react-router-dom";
function Home(){

    return(
             
        <> 
     
        <div className="container-fluid p-0">
      
        <About />
        <hr className="m-0" />
          <Experience />
          <hr className="m-0" />
         <Education />
          <hr className="m-0" />
        
        <Skills />
          <hr className="m-0" />
         
       <Interests/>
          <hr className="m-0" />
       <Awards />  
       
      </div>
        </>
    );
}

export default Home;