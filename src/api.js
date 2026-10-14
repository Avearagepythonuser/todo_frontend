import axios from "axios";
import { use } from "react";


const baseUrl = import.meta.env.VITE_API_URL;

export async function login(username, password) {
    const response = await axios.post(baseUrl + "/login", {username, password})
    console.log(response)
    return response.data;
}