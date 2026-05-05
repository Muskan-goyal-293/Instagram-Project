import { createContext ,  useState } from "react";
export const PostContext = createContext();

export const PostState = ({children})=> {
const[loading ,setLoading] = useState(false);
const [allPost ,setAllPost] = useState(null);
const [response ,setResponse] = useState("")
    return (
<>
<PostContext.Provider value ={{loading , setAllPost ,setLoading ,allPost , response , setResponse}}>
{children}
</PostContext.Provider>
</>)
}


  

