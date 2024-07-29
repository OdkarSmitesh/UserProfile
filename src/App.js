import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import UserDetails from './components/UserDetails/UserDetails';
import handleFormSubmit from './helpers/handleFormSubmit';
import handleLogin from './helpers/handleLogin';
import editRow from './helpers/editRow';
import deleteData from './helpers/deleteData';


function App() {
  const [view, setView] = useState('Register');          // To show different page views
  const [formData, setFormData] = useState({             // To set the form data
    uname: '',
    uemail: '',
    uphone: '',
    upassword: '',
    index: ''
  });

  const [showUser, setShowUser] = useState({});         // To show user details
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || []);

  return (
    <>
      {view === "Register" ? (
        <Register
          formData={formData}
          setFormData={setFormData}
          handleFormSubmit={(event) => handleFormSubmit(event, formData, setFormData, userData, setUserData, setView)}
          setView={setView}
        />
      ) : view === "login" ? (
        <Login onLogin={(loginInfo) => handleLogin(loginInfo, userData, setShowUser, setView)} onViewChange={setView} />
      ) : view === "UserDetails" ? (
        <UserDetails
          showUser={showUser}
          editRow={editRow}
          deleteData={deleteData}
          setFormData={setFormData}
          setUserData={setUserData}
          setView={setView}
          userData={userData}
        />
      ) : null }
      <ToastContainer />
    </>
  );
}

export default App;
