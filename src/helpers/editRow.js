export default function editRow(indexNumber, userData, setFormData) {
  let editData = { ...userData[indexNumber], index: indexNumber };
  setFormData(editData);
}
