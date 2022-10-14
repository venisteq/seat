import axios from "axios";

const BaseClient = axios.create({
    baseURL: "https://seat-backend.herokuapp.com/",
});

export default BaseClient;
