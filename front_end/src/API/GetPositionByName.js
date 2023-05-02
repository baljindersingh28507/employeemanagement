import axios from "axios";
import { API_BASE_URL } from "../config";
export const getPositionByName = (name) => {

   return axios.get(`${API_BASE_URL}position/${name}`)
    .then((data) => {
        return data
    })
    .catch((error) => console.error(error));
};