import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import Experience from './pages/Experience'
import Education from './pages/Education';
import Skills from './pages/Skills';
import Interests from './pages/Interests';
import Awards from './pages/Awards';

import Sidebar from './components/Sidebar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
  return (
    <div classNameName="App">
     <>
     <Router>
      <div>
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/experience">
            <Experience />
          </Route>
          <Route exact path="/education">
            <Education />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
          <Route exact path="/interests">
            <Interests />
          </Route>
          <Route exact path="/awards">
            <Awards />
          </Route>
        </Switch>
      </div>
       <Sidebar />
    </Router>
   
       
       </>
    </div>
  );
}

export default App;
