import React from 'react';
import { Button, Table } from 'react-bootstrap';

const EntryTable = ({ userData, editRow, deleteData, setFormData, setUserData }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Message</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {userData.length >= 1 ? (
          userData.map((obj, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{obj.uname}</td>
              <td>{obj.uemail}</td>
              <td>{obj.uphone}</td>
              <td>{obj.umessage}</td>
              <td>
                <Button onClick={() => editRow(i, userData, setFormData)}>Update</Button>/<br/>
                <Button onClick={() => deleteData(i, userData, setUserData)}>Delete</Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6}>No data available</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default EntryTable;
