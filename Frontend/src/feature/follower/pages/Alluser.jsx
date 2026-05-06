import { useEffect } from "react";
import FollowerHook from "../hook/FollowerHook"
import "../style/AllUser.scss"

function allUser() {
  const {error , loading , getUser , allUser} = FollowerHook();

  useEffect(()=>{
    getUser();
  },[])
  return (
    <div className="outerDiv">
      {loading && <p>Loading.....</p>}
      {error && <p>{error}</p>}
      <div >
        {allUser.map((val)=>{
       return< div className="userDiv">
       <img src={val.profile_image} alt="" />
       <p> user :{val.username}</p>
       <button>Follow</button></div>
      })}

      </div>
          </div>
  )
}

export default allUser
