import { FC } from "react";
import CommentContent from "../Comment/ICommentContent";
import Table from "../Table";
import styles from "./Comments.module.scss";

const Comments: FC<{ isLoading: boolean; data: CommentContent[] }> = ({
  isLoading,
  data,
}) => {
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.commentsContainer}>
          <Table comments={data} />
        </div>
      )}
    </>
  );
};
export default Comments;
