import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import RegisterForm from './components/RegisterForm';
import CreateItem from './components/CreateItem';
import LoginForm from './components/LoginForm';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' render={props => <LoginForm {...props}/>} />
        <RegisterForm />
        <CreateItem />
        <PrivateRoute path='home/profilepage' component={'home/profilepage'} />
      </div>
    </Router>

  );
}

export default App;
