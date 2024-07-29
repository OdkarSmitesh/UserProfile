import { toast } from 'react-toastify';

const handleFormSubmit = (event, formData, setFormData, userData, setUserData, setView) => {
  event.preventDefault();
  const currentFormData = {
    uname: formData.uname,
    uemail: formData.uemail,
    uphone: formData.uphone,
    upassword: formData.upassword,
  };

  if (formData.index === "") {                       // To add data in Local Storage
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
      toast("Account Created..");
    }
  } else {                                         // To update data in Local Storage
    const editIndex = formData.index;
    const oldData = [...userData];      
    const checkEmailExists = userData.some((v,i) =>( v.uemail === formData.uemail) && i !== editIndex);
    const checkPhoneExists = userData.some((v,i) =>( v.uphone === formData.uphone )&& i !== editIndex);

    if (checkEmailExists) {
      toast.error("Email already exists...");
    } else if (checkPhoneExists) {
      toast.error("Phone number already exists...");
    } else {
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
      toast("Details updated..");
      setView("login")
    }
  }
};

export default handleFormSubmit;
