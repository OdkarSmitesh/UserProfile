import React from 'react';
import { Form, Button } from 'react-bootstrap';

const EntryForm = ({ formData, setFormData, handleFormSubmit }) => {
  const getValue = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <div className='pb-3'>
        <label className='form-label'>Name :</label>
        <input
          type='text'
          value={formData.uname}
          onChange={getValue}
          name='uname'
          className='form-control'
        />
      </div>
      <div className='pb-3'>
        <label className='form-label'>Email :</label>
        <input
          type='email'
          value={formData.uemail}
          onChange={getValue}
          name='uemail'
          className='form-control'
        />
      </div>
      <div className='pb-3'>
        <label className='form-label'>Phone :</label>
        <input
          type='phone'
          value={formData.uphone}
          onChange={getValue}
          name='uphone'
          className='form-control'
        />
      </div>
      <div className='mb-3'>
        <label className='form-label'>Message :</label>
        <textarea
          name='umessage'
          value={formData.umessage}
          onChange={getValue}
          className='form-control'
          rows='3'
        />
      </div>
      <Button className='btn btn-primary' type='submit'>
        {formData.index !== '' ? 'Update' : 'Save'}
      </Button>
    </Form>
  );
};

export default EntryForm;
 