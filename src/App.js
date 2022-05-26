import React,{useState,useEffect,Suspense}
// ,{Suspense} 
 from 'react';
import { Route,Switch
 } from 'react-router-dom';
 import NotFound from './Components/NotFound';
import NavBar from './Components/Nabar';
// import Home from './Components/Container';
import Footer from './Components/Footer';
// import About from './Components/Pages/About';
import Academics from './Components/Pages/Academics';
import Admission from './Components/Pages/Admission';
import Faith from './Components/Pages/Faith';
import Parents from './Components/Pages/Parents';
import StudentLife from './Components/Pages/StudentLife';
import CircleLoader from "react-spinners/CircleLoader";
import { css } from "@emotion/react";

// import Loader from './Components/Loader';
const About = React.lazy(() => import('./Components/Pages/About'))
const Home = React.lazy(() => import('./Components/Container'))


const override = css`
    display: flex;
    /* flex-direction: column; */
    width: 100%;
    height: 100%;
    justify-content:center ;
    text-align:center ;
    align-items:center ;
    margin: 0 auto;
    position:fixed ;
    /* top:0 ; */
    /* left:0 ; */
    right:-50% ;
    bottom:-40% ;
`;

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])
  return (
    <>
            {loading?       <CircleLoader color={'red'} loading={loading} css={override}  size={150} />
              :
                   <Suspense > 
                    <NavBar />                                                                 
                            <Switch >
                                    <Route exact path="/">
                                        <Home />
                                    </Route>
                                    <Route  path="/about" >
                                      <About/>
                                    </Route>
                                    <Route  path="/academics">
                                    <Academics/>
                                    </Route>
                                    <Route  to="/admission"  component={Admission } />
                                    <Route  to="/faith"  component={<Faith />} />
                                    <Route  to="/parents"  component={<Parents />} />
                                    <Route  to="/student-life"  component={<StudentLife />} />
                                    <Route  to="*"   component={<NotFound />}  />
                            </Switch>
                  <Footer/>
               </Suspense> 
            }
              

    </>
  );
}

export default App;
