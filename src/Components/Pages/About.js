import React from 'react';
import { BrowserRouter ,  Switch, Route, Redirect
} from 'react-router-dom';
import NotFound from '../../Components/NotFound';
import Education from './Sub-pages/About/Education';
import Welcome from './Sub-pages/About/Welcome';
import OpusDei from './Sub-pages/About/OpusDei';
import Message from './Sub-pages/About/Message';


export default function About() {
  return (
    <BrowserRouter>
        <Switch>
                  <Route path={'/about'} exact >
                    <Redirect to={'/about/welcome-to-the-lagoon-school'}/>
                  </Route>
                  <Route  path="/about/welcome-to-the-lagoon-school"  component={Welcome } />
                  <Route  path="/about/education" component={Education }/>
                  <Route  path="/about/opus-dei" component={OpusDei }/>
                  <Route  path="/about/message-from-the-principal" component={Message }/>
                <Route path="*"  component={NotFound}/>
          </Switch>
</BrowserRouter>
  )
}
