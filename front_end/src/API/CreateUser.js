import axios from "axios";

export const handleCreate = (formData) => {
   return  axios.post("http://localhost:8000/user/addUser", formData)
    .then((data) => {
     return data;
    })
    .catch((error) => console.error(error));
};