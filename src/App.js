import React from 'react';
import { BrowserRouter as  Router, Route,Switch
 } from 'react-router-dom';
 import NotFound from './Components/NotFound';
import NavBar from './Components/Nabar';
import Home from './Components/Container';
import Footer from './Components/Footer';
import About from './Components/Pages/About';
import Academics from './Components/Pages/Academics';
import Admission from './Components/Pages/Admission';
import Faith from './Components/Pages/Faith';
import Parents from './Components/Pages/Parents';
import StudentLife from './Components/Pages/StudentLife';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function App() {
  return (
    <>
              
              <Router>  
            <NavBar />                                                                 
          <Route render={({location}) => (  
                <TransitionGroup>
                  <CSSTransition 
                    key={location.key}
                    timeout={450}
                    classNames="fade"
                  >
                      <Switch>
                                      {/* <Route  to="/"  component={Home}  exact/> */}
                                      <Route exact path="/">
                                        <Home />
                                      </Route>
                                      <Route  to="/about/welcome-to-the-lagoon-school"  component={About }  />
                                      <Route  to="/academics"  component={Academics} />
                                      <Route  to="/admission"  component={<Admission />} />
                                      <Route  to="/faith"  component={<Faith />} />
                                      <Route  to="/parents"  component={<Parents />} />
                                      <Route  to="/student-life"  component={<StudentLife />} />
                                      <Route  to="*"   component={<NotFound />}  />
                        </Switch>
                  </CSSTransition>
                </TransitionGroup>


           )} />

                       
          <Footer/>
      </Router>

    </>
  );
}

export default App;
