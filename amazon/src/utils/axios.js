import axios from "axios";

const instance = axios.create({
    baseURL: "..." //The Api URL (cloud fucntion)
});

export default instance;