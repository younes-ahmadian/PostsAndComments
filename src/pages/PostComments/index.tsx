import { useLocation, useNavigate, useParams } from "react-router-dom";
import CommentContent from "../../components/Comment/ICommentContent";
import useFetchData from "../../hooks/useFetchData";
import SelectedPost from "../../components/SelectedPost";
import Comments from "../../components/Commetns";
import styles from "./postCommetns.module.scss";

const PostDetials = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const { state } = useLocation();
  const { post } = state;

  const { data, isLoading } = useFetchData<CommentContent[]>(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );

  return (
    <section className={styles.postCommentsContainer}>
      <button onClick={() => navigate(-1)}>Back to Posts</button>
      <div>
        <SelectedPost post={post} />
        {data && <Comments isLoading={isLoading} data={data} />}
      </div>
    </section>
  );
};
export default PostDetials;
