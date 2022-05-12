import React from 'react';
import { BrowserRouter as Router, 
  // Switch, Route
 } from 'react-router-dom';

import Nabar from './Components/Nabar';
import Container from './Components/Container';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Router>
        <Nabar/>
        <Container/>
      {/* <Switch>
          <Route />
      </Switch> */}
      <Footer/>
    </Router>
      
    </>
  );
}

export default App;
