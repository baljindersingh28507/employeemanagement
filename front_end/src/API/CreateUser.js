import axios from "axios";
import { API_BASE_URL } from "../config";

export const handleCreate = (formData) => {
    
   return  axios.post(`${API_BASE_URL}user/addUser`, formData)
    .then((data) => {
     return data;
    })
    .catch((error) => console.error(error));
};