
import React from 'react';
import {   Switch, Route, Redirect,useLocation
} from 'react-router-dom';
import NotFound from '../../Components/NotFound';
import Lunch from './Sub-pages/Parents/Lunch';
import Nafad from './Sub-pages/Parents/Nafad';
import Safety from './Sub-pages/Parents/Safety';

function Parents() {
  const location = useLocation();
  return (
            <Switch location={location} key={location.pathname}>
                  <Route path={'/parents'} exact >
                    <Redirect to={'/parents/nafad'}/>
                    </Route>
                    <Route  path="/parents/nafad"  >
                        <Nafad/>
                    </Route>
                    <Route  path="/parents/lunch" component={Lunch }/>
                    <Route  path="/parents/safety" component={Safety}/>
                  <Route path="*"  component={NotFound}/>
            </Switch>

  )
}



export default Parents
