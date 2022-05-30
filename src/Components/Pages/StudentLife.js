import React from 'react';
import {   Switch, Route, Redirect,useLocation
} from 'react-router-dom';
import NotFound from '../../Components/NotFound';
import Activities from './Sub-pages/StudentLife/Activities';
import Life from './Sub-pages/StudentLife/Life';
import Mentor from './Sub-pages/StudentLife/Mentor';
import Service from './Sub-pages/StudentLife/Service';
import Traditions from './Sub-pages/StudentLife/Traditions';

function StudentLife() {
  const location = useLocation();
  return (
            <Switch location={location} key={location.pathname}>
                  <Route path={'/student-life'} exact >
                    <Redirect to={'/student-life/life-in-lagoon'}/>
                    </Route>
                    <Route  path="/student-life/life-in-lagoon"  >
                        <Life/>
                    </Route>
                    <Route  path="/student-life/lagoon-traditions" component={Traditions }/>
                    <Route  path="/student-life/mentorship" component={Mentor}/>
                    <Route  path="/student-life/service" component={Service}/>
                    <Route  path="/student-life/activities" component={Activities}/>
                  <Route path="*"  component={NotFound}/>
            </Switch>

  )
}



export default StudentLife
