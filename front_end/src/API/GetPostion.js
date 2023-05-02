import axios from "axios";

export const getPosition = (editingId, formData) => {
   return axios.get(`http://localhost:8000/position`)
    .then((data) => {
        return data
    })
    .catch((error) => console.error(error));
};