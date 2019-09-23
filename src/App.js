import React from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm';
import CreateItem from './components/CreateItem';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <LoginForm />
      <RegisterForm />
      <CreateItem />
    </div>
  );
}

export default App;
