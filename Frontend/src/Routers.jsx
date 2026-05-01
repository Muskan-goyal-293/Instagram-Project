import { Routes , Route } from "react-router-dom";
import Login from "./feature/auth/pages/Login";
import Register from "./feature/auth/pages/Register";
function Routers(){
    return(<>
     <Routes>
     <Route path="/login" element ={<Login/>}/>
    <Route path="/register" element ={<Register/>}/>
     </Routes>
    
    </>)


}

export default  Routers;

