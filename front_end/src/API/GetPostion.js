import axios from "axios";
import { API_BASE_URL } from "../config";
export const getPosition = (editingId, formData) => {
   return axios.get(`${API_BASE_URL}position`)
    .then((data) => {
        return data
    })
    .catch((error) => console.error(error));
};