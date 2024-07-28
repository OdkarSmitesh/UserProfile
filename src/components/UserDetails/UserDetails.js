import React from 'react';
import './UserDetails.css';

const UserDetails = ({ showUser, editRow, deleteData, setFormData, setUserData, setView, userData }) => {
  const handleEdit = () => {
    editRow(userData.indexOf(showUser), userData, setFormData);
    setView('Register');
  };

  const handleDelete = () => {
    deleteData(userData.indexOf(showUser), userData, setUserData);
    localStorage.setItem('userData', JSON.stringify(userData.filter((_, i) => i !== userData.indexOf(showUser))));
    setView('Register');
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">{showUser.uname}</h2>
        <p className="card-text">Email: {showUser.uemail}</p>
        <p className="card-text">Phone: {showUser.uphone}</p>
        <p className="card-text">Password: {showUser.upassword}</p>
        <button className="btn btn-primary" onClick={handleEdit}>Edit</button>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
        <button className="btn btn-secondary" onClick={() => setView('login')}>Back</button>
      </div>
    </div>
  );
};

export default UserDetails;
