export default function editRow(indexNumber,userData,setFormData){
    let editData=userData.filter((v,i)=>i==indexNumber)[0];
    editData['index']=indexNumber;

    setFormData(editData)

  }
