import { AuthContext,} from "../services/authstate";
import { useContext } from "react";
import { registerApi ,loginApi } from "../auth.api";

export const authHookFunction =()=>{
const {loading,error,user, setError ,setLoading  ,setUser} = useContext(AuthContext)
 
 const  register = async (username ,email,password ,confirmPassword)=>{
    setError(null)
 if(password !== confirmPassword){
    setError("not match");
    return 
 }
 
 setLoading(true);
 
 try{
     const  data =   await registerApi(username, email,password,confirmPassword) ;
     setUser(data);
 }
 catch(err){
     setError(err.message)
    }
    finally{
        setLoading(false)
    }
}

const login = async(username , password)=>{
    setLoading(true)
 try{
    const data = await loginApi(username ,password)
 setUser(data)
}
 catch(err){
    setError(err.message)
 }
 finally{
    setLoading(false)
 }


}
return {loading ,error ,user ,register ,login}
} 