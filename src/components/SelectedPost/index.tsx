import { FC } from "react";
import PostContent from "../Post/IPostContent";
import styels from "./SelectedPost.module.scss"

const SelectedPost: FC<{ post: PostContent }> = ({ post }) => {
  return (
    <div className={styels.selectedPostContainer}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};
export default SelectedPost;
