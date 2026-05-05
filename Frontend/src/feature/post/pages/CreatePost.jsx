import {  useState } from "react";
import "../style/createPost.scss"
import {useNavigate}  from "react-router-dom";
import {AllPostFun} from "../Hook/postHook";

const CreatePost = () => {
const {loading , imageCreateFunction , response} = AllPostFun()
  const navigate = useNavigate()
function formHandle(e){
  e.preventDefault()
  imageCreateFunction(caption , image)
  navigate("/post")
}
function imageHandle(e){
const files  = e.target.files[0]
setImage(files)
}
 
const [caption ,setCaption] = useState("");
const [image , setImage] = useState(null);
  return (
    <div className="createPostWrapper">
      {loading && <div>Loading</div>}
        <form onSubmit={(e)=>{formHandle(e)}}>
          <label htmlFor="image" className="imageLabel" >Choose your image</label>
            <input type="file" hidden name="image" id="image" onChange={(e)=>{imageHandle(e)}} />
            <input type="text" name="caption" id="caption" className="caption" placeholder="Enter Caption" value={caption} onChange={(e)=>{setCaption(e.target.value)}} />
           <button   className="createPostButton">Create Post</button>
          </form>
          {response && <div>{response}</div>}      
    </div>
  )
}

export default CreatePost
