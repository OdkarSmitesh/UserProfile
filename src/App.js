import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import editRow from './helpers/editRow';
import deleteData from './helpers/deleteData';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  const [view, setView] = useState('Register');
  const [formData, setFormData] = useState({
    uname: '',
    uemail: '',
    uphone: '',
    upassword: '',
    index: ''
  });

  const [showUser, setShowUser] = useState({});
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const currentFormData = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      upassword: formData.upassword,
    };

    if (formData.index === "") {
      const checkEmailExists = userData.some((v) => v.uemail === formData.uemail);
      const checkPhoneExists = userData.some((v) => v.uphone === formData.uphone);

      if (checkEmailExists) {
        toast.error("Email already exists...");
      } else if (checkPhoneExists) {
        toast.error("Phone number already exists...");
      } else {
        const updatedUserData = [...userData, currentFormData];
        setUserData(updatedUserData);
        localStorage.setItem('userData', JSON.stringify(updatedUserData));
        setFormData({
          uname: '',
          uemail: '',
          uphone: '',
          upassword: '',
          index: ''
        });
        toast("Data added..");
      }
    } else {
      const editIndex = formData.index;
      const oldData = [...userData];
      const checkFilterUser = userData.filter((v, i) => (v.uemail === formData.uemail || v.uphone === formData.uphone) && i !== editIndex);

      if (checkFilterUser.length === 0) {
        oldData[editIndex] = currentFormData;
        setUserData(oldData);
        localStorage.setItem('userData', JSON.stringify(oldData));
        setFormData({
          uname: '',
          uemail: '',
          uphone: '',
          upassword: '',
          index: ''
        });
        toast("Data updated..");
        setView("login")
      } else {
        toast.error("Email or phone number already exists...");
      }
    }
  };

  const handleLogin = (loginInfo) => {
    const user = userData.filter((v) => v.uname === loginInfo.uname && v.upassword === loginInfo.upassword);

    if (user.length > 0) {
      setShowUser(user[0]);
      setView('UserDetails');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <>
      {view === "Register" ? (
        <Register
          formData={formData}
          setFormData={setFormData}
          handleFormSubmit={handleFormSubmit}
          setView={setView}
        />
      ) : view === "login" ? (
        <Login onLogin={handleLogin} onViewChange={setView} />
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
