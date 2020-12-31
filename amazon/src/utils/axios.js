import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-clone-bc3dc.cloudfunctions.net/api" 
});
// http://localhost:5001/clone-bc3dc/us-central1/api

export default instance;