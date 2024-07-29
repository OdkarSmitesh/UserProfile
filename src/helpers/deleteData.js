import { toast } from "react-toastify";

export default function deleteData(indexNumber, userData, setUserData) {
  let dataLeft = userData.filter((i) => i !== indexNumber);
  setUserData(dataLeft);
  toast.success("Data Deleted successfully..");
}
