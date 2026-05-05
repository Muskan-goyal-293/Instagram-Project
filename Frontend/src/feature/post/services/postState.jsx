import { createContext ,  useState } from "react";
export const PostContext = createContext();

export const PostState = ({children})=> {
const[loading ,setLoading] = useState(false);
const [allPost ,setAllPost] = useState(null);
    return (
<>
<PostContext.Provider value ={{loading , setAllPost ,setLoading ,allPost}}>
{children}
</PostContext.Provider>
</>)
}


  

