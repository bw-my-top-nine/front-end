import React from 'react';
import './App.css';
import Header from './components/Header'
import RegisterForm from './components/RegisterForm';
import CreateItem from './components/CreateItem';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <Header />
      <LoginForm />
      <RegisterForm />
      <CreateItem />
    </div>
  );
}

export default App;
