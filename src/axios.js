import axios from "axios";

const instance = axios.create({
    baseURL: "https://tindercards-backend.herokuapp.com",
});

export default instance;
