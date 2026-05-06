import { createContext } from "react";
import { useState } from "react";

export const FollowContext=  createContext()
export const  FollowerState = ({children})=> {
  const [allUser , setAllUser] = useState([]);
  const [loading ,setLoading] = useState(false);
  const [error , setError] = useState(null);
       return (
    <FollowContext.Provider value={{allUser, setAllUser,loading ,setLoading,error , setError}}>
        {children}
    </FollowContext.Provider>
  )
}
