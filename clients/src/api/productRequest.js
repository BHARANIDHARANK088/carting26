// 18
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api"});

export const getProducts = (cat) => API.get(cat ? "/products?category=" + cat : "/products");


// 29
export const getSingleProduct = (productId) => API.get("/products/find/" + productId);

export const getPartialProducts = (searchQuery) => API.get("/products/partial/" + searchQuery);

export const registerUser = (user) => API.post("/auth/register", user);