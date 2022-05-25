import React from 'react';
import { BrowserRouter ,  Routes, Route, Navigate
} from 'react-router-dom';
import NotFound from '../../Components/NotFound';
import Education from './Sub-pages/About/Education';
import Welcome from './Sub-pages/About/Welcome';
import OpusDei from './Sub-pages/About/OpusDei';
import Message from './Sub-pages/About/Message';


export default function About() {
  return (
    <BrowserRouter>
    <Routes>
              <Route path={'/about'} exact >
                <Navigate to={'/about/welcome-to-the-lagoon-school'}/>
              </Route>
              <Route exact path="/about/welcome-to-the-lagoon-school"  element={<Welcome />} />
              <Route exact path="/about/education" element={<Education />}/>
              <Route exact path="/about/opus-dei" element={<OpusDei />}/>
              <Route exact path="/about/message-from-the-principal" element={<Message />}/>
            <Route path="*"  element={<NotFound />}/>
      </Routes>
</BrowserRouter>
  )
}
