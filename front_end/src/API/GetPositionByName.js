import axios from "axios";

export const getPositionByName = (name) => {
   return axios.get(`http://localhost:8000/position/${name}`)
    .then((data) => {
        return data
    })
    .catch((error) => console.error(error));
};