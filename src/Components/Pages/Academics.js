import React from 'react';
import {   Switch, Route, Redirect,useLocation
} from 'react-router-dom';
import NotFound from '../../Components/NotFound';
import Inquire from './Inquire';
import AcademicFacilities from './Sub-pages/Academics/AcademicFacilities';
import Calendar from './Sub-pages/Academics/Calendar';
import Courses from './Sub-pages/Academics/Courses';
import PrimarySchool from './Sub-pages/Academics/PrimarySchool';
import SecSchool from './Sub-pages/Academics/SecSchool';

function Academics() {
  const location = useLocation();
  return (
    <>
      <Switch location={location} key={location.pathname}>
                  <Route path={'/academics'} exact >
                    <Redirect to={'/academics/academic-facilities'}/>
                    </Route>
                    <Route  path="/academics/academic-facilities"  >
                        <AcademicFacilities/>
                    </Route>
                    <Route  path="/academics/calendar" component={Calendar }/>
                    <Route  path="/academics/courses" component={Courses}/>
                    <Route  path="/academics/primary-school" component={PrimarySchool }/>
                    <Route  path="/academics/secondary-school" component={SecSchool}/>
                  <Route path="*"  component={NotFound}/>
            </Switch>
          <Inquire/>
    </>
          

  )
}



export default Academics
