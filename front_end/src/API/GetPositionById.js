import axios from "axios";
import { API_BASE_URL } from "../config";
export const getPositionById = (id) => {
    
    
   return axios.get(`${API_BASE_URL}position/id/${id}`)
    .then((data) => {
        return data
    })
    .catch((error) => console.error(error));
};