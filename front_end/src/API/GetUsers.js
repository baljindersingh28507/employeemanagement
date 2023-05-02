import axios from "axios";
import { getPositionByName } from "./GetPositionByName";

export const handleFetchData = async (name) => {
    const { data } = await getPositionByName(name);
    if (data.data.length) {
        return axios.get(`http://localhost:8000/user/getUsersByRole/${data.data[0]._id}`)
            .then((response) => { return (response.data) })
            .catch((error) => console.error(error));

    } else {
        return;
    }
};