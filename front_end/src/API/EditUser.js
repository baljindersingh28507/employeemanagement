import axios from "axios";
import { API_BASE_URL } from "../config";
export const handleEdit = (editingId, formData) => {
   return axios.put(`${API_BASE_URL}user/updateUser/${editingId}`, formData)
    .then((data) => {
        return data
    })
    .catch((error) => console.error(error));
};