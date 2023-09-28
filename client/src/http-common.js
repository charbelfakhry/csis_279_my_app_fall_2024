import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3001/api",
    headers: {
        "Content-Type": "application/json" // Fixed content type
    }
});