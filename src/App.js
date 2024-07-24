import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import editRow from './functions/editRow';
import deleteData from './functions/deleteData';
import EntryForm from './components/EntryForm';
import UserTable from './components/EntryTable';

function App() {
  const [formData, setFormData] = useState({
    uname: '',
    uemail: '',
    uphone: '',
    umessage: '',
    index: ''
  });

  const [userData, setUserData] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const currentFormData = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      umessage: formData.umessage
    };

    if (formData.index === "") {
      const checkFilterUser = userData.filter((v) => v.uemail === formData.uemail || v.uphone === formData.uphone);

      if (checkFilterUser.length === 1) {
        toast.error("Email or phone number already exists...");
      } else {
        setUserData([...userData, currentFormData]);
        setFormData({
          uname: '',
          uemail: '',
          uphone: '',
          umessage: '',
          index: ''
        });
        toast("Data added..");
      }
    } else {
      const editIndex = formData.index;
      const oldData = [...userData];
      const checkFilterUser = userData.filter((v, i) => (v.uemail === formData.uemail || v.uphone === formData.uphone) && i !== editIndex);

      if (checkFilterUser.length === 0) {
        oldData[editIndex] = { ...currentFormData };
        setUserData(oldData);
        setFormData({
          uname: '',
          uemail: '',
          uphone: '',
          umessage: '',
          index: ''
        });
      } else {
        toast.error("Email or phone number already exists...");
      }
    }
  };

  return (
    <Container fluid>
      <ToastContainer />
      <Container>
        <Row>
          <Col className='text-center py-5'>
            <h1>Entry Form</h1>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <EntryForm
              formData={formData}
              setFormData={setFormData}
              handleFormSubmit={handleFormSubmit}
            />
          </Col>
          <Col lg={7}>
            <UserTable 
              userData={userData}
              editRow={editRow}
              deleteData={deleteData}
              setFormData={setFormData}
              setUserData={setUserData}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;