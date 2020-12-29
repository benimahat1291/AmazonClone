import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/clone-bc3dc/us-central1/api" //The Api URL (cloud fucntion)
});

export default instance;