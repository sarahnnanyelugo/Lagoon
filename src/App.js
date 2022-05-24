import React from 'react';
import { BrowserRouter as Router,  Switch, Route
 } from 'react-router-dom';
 import NotFound from './Components/NotFound';
import Nabar from './Components/Nabar';
import Container from './Components/Container';
import Footer from './Components/Footer';
import About from './Components/Pages/About';
import Academics from './Components/Pages/Academics';
import Admission from './Components/Pages/Admission';
import Faith from './Components/Pages/Faith';
import Parents from './Components/Pages/Parents';
import StudentLife from './Components/Pages/StudentLife';
// import { Refreshable } from 'react-router-refreshable'


function App() {
  return (
    <>
        <Router>                                                                                  
              <Nabar />
                    {/* <Refreshable> */}
                        <Switch>
                                  <Route to="/" component={Container}   exact/>
                                  <Route to="/about" component={About}/>
                                  <Route to="/academics" component={Academics}/>
                                  <Route to="/admission" component={Admission}/>
                                  <Route to="/faith" component={Faith}/>
                                  <Route to="/parents" component={Parents}/>
                                  <Route to="/student-life" component={StudentLife}/>
                                  <Route to="*"  component={NotFound}  />
                            </Switch>
              {/* </Refreshable> */}

              <Footer/>
          </Router>

    </>
  );
}

export default App;
