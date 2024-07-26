import React from 'react';
import './Register.css';

const Register = ({ formData, setFormData, handleFormSubmit, setView }) => {
  const getValue = (event) => {
    let oldData = { ...formData };
    let currentInput = event.target.name;
    let inputValue = event.target.value;
    oldData[currentInput] = inputValue;
    setFormData(oldData);
  };

  return (
    <form onSubmit={handleFormSubmit} className="register-form">
      <div className='form-group'>
        <label className='form-label'>Name:</label>
        <input
          type='text'
          value={formData.uname}
          onChange={getValue}
          name='uname'
          className='form-control'
          required
        />
      </div>
      <div className='form-group'>
        <label className='form-label'>Email:</label>
        <input
          type='email'
          value={formData.uemail}
          onChange={getValue}
          name='uemail'
          className='form-control'
          required
        />
      </div>
      <div className='form-group'>
        <label className='form-label'>Phone:</label>
        <input
          type='tel'
          value={formData.uphone}
          onChange={getValue}
          name='uphone'
          className='form-control'
          required
        />
      </div>
      <div className='form-group'>
        <label className='form-label'>Password:</label>
        <input
          type='password'
          value={formData.upassword}
          onChange={getValue}
          name='upassword'
          className='form-control'
          required
        />
      </div>
      <button className='btn btn-primary' type='submit'>
        Save
      </button>
      <p />
      <button className='btn btn-secondary' type="button" onClick={() => setView("login")}>Show Details</button>
    </form>
  );
};

export default Register;
