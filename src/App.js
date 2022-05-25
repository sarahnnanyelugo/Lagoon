import React from 'react';
import { BrowserRouter ,  Routes, Route
 } from 'react-router-dom';
 import NotFound from './Components/NotFound';
import Nabar from './Components/Nabar';
import Home from './Components/Container';
import Footer from './Components/Footer';
import About from './Components/Pages/About';
import Academics from './Components/Pages/Academics';
import Admission from './Components/Pages/Admission';
import Faith from './Components/Pages/Faith';
import Parents from './Components/Pages/Parents';
import StudentLife from './Components/Pages/StudentLife';
// import { CSSTransition, TransitionGroup } from 'react-transition-group'

function App() {
  return (
    <>
        <BrowserRouter>                                                                                  
              <Nabar />
              <Routes>

                  {/* <Route render={({location}) => (  
                    <TransitionGroup>
                      <CSSTransition    key={location.key}   timeout={450}  classNames="fade"  >
                                
                      </CSSTransition>
                    </TransitionGroup>
                  )} /> */}

                                      <Route  to="/about"  element={<About />}  />
                                      <Route  to="/academics"  element={<Academics />} />
                                      <Route  to="/admission"  element={<Admission />} />
                                      <Route  to="/faith"  element={<Faith />} />
                                      <Route  to="/parents"  element={<Parents />} />
                                      <Route  to="/student-life"  element={<StudentLife />} />
                                      <Route  to="*"   element={<NotFound />}  />
                  </Routes>
                  {/* <Route  to="/"  element={}  /> */}
                  <Home />
              <Footer/>
          </BrowserRouter>

    </>
  );
}

export default App;
