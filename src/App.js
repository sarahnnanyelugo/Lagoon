import React from 'react';
import { BrowserRouter as Router,  Switch, Route
 } from 'react-router-dom';
 import NotFound from './Components/NotFound';
import Nabar from './Components/Nabar';
import Container from './Components/Container';
import Footer from './Components/Footer';
// import { CSSTransition, TransitionGroup } from 'react-transition-group'
import About from './Components/Pages/About';
import Academics from './Components/Pages/Academics';
import Admission from './Components/Pages/Admission';
import Faith from './Components/Pages/Faith';
import Parents from './Components/Pages/Parents';
import StudentLife from './Components/Pages/StudentLife';

function App() {
  return (
    <>
    <Router>                                                                                  
          <Nabar />
          <Router 
          // render={({location}) => (             // <TransitionGroup>
          //       //   <CSSTransition  key={location.key} timeout={450} classNames="fade" >
                      
          //       //   </CSSTransition>
          //       // </TransitionGroup>


          //  )} 
           />
                    <Switch>
                              <Route path="/" component={Container}   exact/>
                              <Route path="/about" component={About} />
                              <Route path="/academics" component={Academics} />
                              <Route path="/admission" component={Admission} />
                              <Route path="/faith" component={Faith} />
                              <Route path="/parents" component={Parents} />
                              <Route path="/student-life" component={StudentLife} />
                              <Route path="*"  component={NotFound}  />
                        </Switch>

          <Footer/>
      </Router>
    </>
  );
}

export default App;
