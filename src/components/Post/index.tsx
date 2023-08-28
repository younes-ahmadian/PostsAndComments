import { useNavigate } from "react-router-dom";
import PostContent from "./IPostContent";
import { Dispatch, FC, SetStateAction } from "react";

const Post: FC<{
  post: PostContent;
  setLastElement: Dispatch<SetStateAction<Element | null>>;
}> = ({ post, setLastElement }) => {
  const navigate = useNavigate();
  return (
    <li ref={setLastElement}>
      <h1>{post.title}</h1>
      <div>
        <p>{post.body}</p>
        <button
          onClick={() =>
            navigate(`/${post.id}`, {
              state: {
                post,
              },
            })
          }
        >
          Post Comments
        </button>
      </div>
    </li>
  );
};
export default Post;
