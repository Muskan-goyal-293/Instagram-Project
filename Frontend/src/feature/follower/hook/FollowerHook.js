import { useContext } from "react";
import { FollowContext } from "../context/FollowerState";
import { getAllUser } from "../api/followerapi";

function FollowerHook() {
 const data = useContext(FollowContext);
 const {allUser , setAllUser ,loading ,setLoading ,error , setError} = data
 const getUser = async ()=>{
    setError(null);
    setLoading(true)
    try{
        const response = await getAllUser();
        setAllUser(response.data.response)
    }
    catch(err){
        setError(err.response.data.message)
    }
    finally{
        setLoading(false)
    }
 }    
return {allUser , loading, error , getUser}
}

export default FollowerHook
