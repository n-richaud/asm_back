import axios from "axios";

export default {
    login() {
        return axios.post("/api/security/login");
    }
}