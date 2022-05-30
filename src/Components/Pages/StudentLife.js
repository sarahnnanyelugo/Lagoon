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
                  <Route path={'/student_life'} exact >
                    <Redirect to={'/student_life/life_in_lagoon'}/>
                    </Route>
                    <Route  path="/student_life/life_in_lagoon"  >
                        <Life/>
                    </Route>
                    <Route  path="/student_life/lagoon_traditions" component={Traditions }/>
                    <Route  path="/student_life/mentorship" component={Mentor}/>
                    <Route  path="/student_life/service" component={Service}/>
                    <Route  path="/student_life/activities" component={Activities}/>
                    <Route path="*"  component={NotFound}/>
            </Switch>

  )
}



export default StudentLife
