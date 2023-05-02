import axios from "axios";

export const handleEdit = (editingId, formData) => {
   return axios.put(`http://localhost:8000/user/updateUser/${editingId}`, formData)
    .then((data) => {
        return data
    })
    .catch((error) => console.error(error));
};