import axios from "axios";

export const getPositionById = (id) => {
   return axios.get(`http://localhost:8000/position/id/${id}`)
    .then((data) => {
        return data
    })
    .catch((error) => console.error(error));
};