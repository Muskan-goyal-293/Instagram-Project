import axios from "axios"

const api = axios.create({
    baseURL : "http://localhost:3000/api",
    withCredentials : true,
})

export const getAllUser = async ()=>{
   const response =  await api.get("/allUser");
   return response;
}
