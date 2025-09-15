import axios from "axios";

const back = axios.create({
  baseURL: "http://localhost:3001/api/users",
  timeout: 10000,
});

export default back;