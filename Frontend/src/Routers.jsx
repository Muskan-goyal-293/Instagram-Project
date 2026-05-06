import { Routes , Route } from "react-router-dom";
import Login from "./feature/auth/pages/Login";
import Register from "./feature/auth/pages/Register";
import ReelCard from "./feature/post/pages/ReelCard";
import CreatePost from "./feature/post/pages/CreatePost";
import Alluser from "./feature/follower/pages/Alluser";
function Routers(){
    return(<>
    <Routes>
    <Route path="/login" element ={<Login/>}/>
    <Route path="/" element ={<Register/>}/>
    <Route path="/Post" element={<ReelCard/>} />
    <Route path="/CreatePost" element ={<CreatePost/>} />
    <Route path="/allUser" element={<Alluser/>}/>
    </Routes>
    
    </>)


}

export default  Routers;

