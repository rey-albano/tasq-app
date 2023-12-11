import React from 'react';
import { Link } from 'react-router-dom';
import List from './List';
import Login from './Login';
import './Tasq.css';

function Tasq() {
  return (
    <main>
      <div className="app-container">
        <Link to="/list" className="list-container">
          <List />
        </Link>
        <Link to="/login" className="login-container">
          <Login />
        </Link>
      </div>
    </main>
  );
}

export default Tasq;
