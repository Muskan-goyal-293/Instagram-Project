import { useState } from "react"
import {Link ,useNavigate} from "react-router-dom"
import "../style/register.scss"
import { authHookFunction } from "../hook/Authhook";

function Login(){

 const [username ,setUserName] = useState("");
 const [password , setPassword] = useState("");
 const {loading ,error ,user ,login } = authHookFunction()
 const navigate = useNavigate()
 async function loginFunction(e){
  e.preventDefault();
   await login(username , password)

  setUserName("");
  setPassword("");
  navigate("/Post")

}
 return(<>  

<main>
<h1>Login</h1>
      {error && <p>{error}</p>}


 <form onSubmit={(e)=>{loginFunction(e)}} >
<input type="text" placeholder="Enter Your Name /Email" value={username} onChange={(e)=>{
    setUserName(e.target.value)
}}  />
<input type="password" placeholder="Enter Password" value={password} onChange={(e)=>{
    setPassword(e.target.value)
}} />

<button type="submit"> {loading? "loading" : "Login" }</button>
 </form>

<p>if you have no account ? <Link className="link" to="/register">Register</Link></p>
</main>
    </>)
}
export default Login