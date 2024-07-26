import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin, onViewChange }) {
  const [uname, setUsername] = useState('');
  const [upassword, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginInfo = { uname, upassword };
    onLogin(loginInfo);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
      <div>
        <label>Username: </label>
        <input type="text" value={uname} name='uname' onChange={(e) => setUsername(e.target.value)} required />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" value={upassword} name='upassword' onChange={(e) => setPassword(e.target.value)} required />
      </div>
      <button type="submit">Login</button>
      <button type="button" onClick={() => onViewChange('Register')}>Register</button>
    </form>
  );
}

export default Login;
