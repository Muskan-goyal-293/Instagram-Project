import { useState } from "react"
import {Link} from "react-router-dom"
import "../style/register.scss"
import axios from "axios"


function Login(){

 const [username ,setUserName] = useState("");
 const [password , setPassword] = useState("");
 
 function loginFunction(e){
  e.preventDefault();

  axios.post("http://localhost:3000/api/login" ,{username,password})
 .then((res)=>{
    console.log(res)
 })
 .catch((err)=>{
    console.log(err)
 })
}
 return(<>  

<main>
<h1>Login</h1>
 <form onSubmit={(e)=>{loginFunction(e)}} >
<input type="text" placeholder="Enter Your Name /Email" value={username} onChange={(e)=>{
    setUserName(e.target.value)
}}  />
<input type="password" placeholder="Enter Password" value={password} onChange={(e)=>{
    setPassword(e.target.value)
}} />

<button type="submit">Login</button>
 </form>

<p>if you have no account ? <Link className="link" to="/register">Register</Link></p>
</main>
    </>)
}
export default Login