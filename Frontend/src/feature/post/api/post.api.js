import axios from 'axios'
const api = axios.create({
    baseURL :"http://localhost:3000/api",
    withCredentials :true
})

export const allPostFunction = async ()=>{
 const response = await api.get("/getAllPost")
  return response
}

export const createPostFunction = async (caption , image)=>{
    const formdata = new FormData();
  formdata.append("caption", caption);
  formdata.append("image" , image);
    const response = await  api.post("/post" , formdata);
    return response;
} 


