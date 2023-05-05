import axios from "axios";
const API = axios.create({
  // baseURL: "https://stackoverflow-server-chinmay.onrender.com",
  baseURL: "http://localhost:5000",
});

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("Profile")) {
//     req.headers.authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("Profile")).token
//     }`;
//   }
//   return req;
// });

export const conLogin = (authData) => API.post("/consumer/login", authData);
export const conSignup = (authData) => API.post("/consumer/signup", authData);
export const orgLogin = (authData) => API.post("/organiser/login", authData);
export const orgSignup = (authData) => API.post("/organiser/signup", authData);
