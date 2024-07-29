const handleLogin = (loginInfo, userData, setShowUser, setView) => {
    const user = userData.filter((v) => v.uname === loginInfo.uname && v.upassword === loginInfo.upassword);
  
    if (user.length > 0) {
      setShowUser(user[0]);
      setView('UserDetails');
    } else {
      alert('Invalid username or password');
    }
  };
  
  export default handleLogin;
  