import axios from "axios";

export const handleDelete = (id) => {
  return  axios.delete(`http://localhost:8000/user/deleteUser/${id}`)
        .then(() => {
            return true;
        })
        .catch((error) => console.error(error));
};