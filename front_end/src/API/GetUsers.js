import axios from "axios";
import { getPositionByName } from "./GetPositionByName";
import { API_BASE_URL } from "../config";

export const handleFetchData = async (name) => {
    const { data } = await getPositionByName(name);
    if (data.data.length) {
        return axios.get(`${API_BASE_URL}user/getUsersByRole/${data.data[0]._id}`)
            .then((response) => { return (response.data) })
            .catch((error) => console.error(error));

    } else {
        return;
    }
};