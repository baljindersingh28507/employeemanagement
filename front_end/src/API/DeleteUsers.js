import axios from "axios";
import { API_BASE_URL } from "../config";

export const handleDelete = (id) => {

  return  axios.delete(`${API_BASE_URL}user/deleteUser/${id}`)
        .then(() => {
            return true;
        })
        .catch((error) => console.error(error));
};