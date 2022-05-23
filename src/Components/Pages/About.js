import React from 'react';
import { BrowserRouter as Router,  Switch, Route,Redirect
} from 'react-router-dom';
import NotFound from '../../Components/NotFound';
import Education from './Sub-pages/About/Education';
import Welcome from './Sub-pages/About/Welcome';
import OpusDei from './Sub-pages/About/Opus-dei';
import Message from './Sub-pages/About/Message';


export default function About() {
  return (
    <Router>
    <Switch>
              <Route path={'/about'} exact >
                <Redirect to={'/about/welcome-to-the-lagoon-school'}/>
              </Route>
              <Route path="/about/welcome-to-the-lagoon-school" component={Welcome}   exact/>
              <Route path="/about/education" component={Education}   exact/>
              <Route path="/about/opus-dei" component={OpusDei}   exact/>
              <Route path="/about/message-from-the-principal" component={Message}   exact/>

            <Route path="*" component={NotFound}  />
      </Switch>
</Router>
  )
}
