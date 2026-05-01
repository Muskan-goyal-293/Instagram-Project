import axios from "axios"

const api = axios.create({
    baseURL : "http://localhost:3000/api",
    withCredentials : true
})

export const registerApi =async (username , email , password,confirmPassword)=>{
   const result =  await api.post("/register" ,{
        username ,email , password ,confirmPassword
    } )
    return result.data
}

 
export const loginApi = async (username , password)=>{
    const result = await api.post("/login" ,{username , password})
    return result.data;
}

