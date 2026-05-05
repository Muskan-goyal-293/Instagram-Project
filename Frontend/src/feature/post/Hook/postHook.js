import { allPostFunction, createPostFunction } from "../api/post.api";
import { PostContext } from "../services/postState";
import { useContext } from "react";
export const AllPostFun = () => {
  const { loading, setLoading, setAllPost, allPost } = useContext(PostContext);

  const data = async () => {
    try {
      setLoading(true);
      const response = await allPostFunction();
      setAllPost(response.data.allPost);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const imageCreateFunction = async (caption, image) => {
    try {
      setLoading(true);

      const response = await createPostFunction(caption, image);

      setAllPost((prev) => [response.data.post, ...prev]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return { loading, allPost, data, imageCreateFunction };
};
