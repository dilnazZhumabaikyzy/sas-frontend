import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/SignIn.css';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/main');
  };

  return (
    <div className="signIn">
      <div className="container">
        <img src={logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <input type="number" placeholder='ID' />
          <input type="password" placeholder='PASSWORD' />
          <button type="submit" >LOG IN</button>
        </form>
      </div>
    </div>

  );
}

export default SignIn;