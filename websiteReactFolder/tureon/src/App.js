import React from 'react';
import './App.css';
import { BrowserRouter as Router ,Routes as Switch, Route} from 'react-router-dom';
import SigninPage from './pages/signin';
import SignUpPage from './pages/signup';

import Home from './pages';


function App() {
  return (

    <Router>
      <Switch>
        <Route path='/' element={<Home/>} />
        <Route path='/signin' element={<SigninPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
      </Switch>
    </Router>
  );
}

export default App;

//      
//  

