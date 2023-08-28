import { FC } from "react";
import CommentContent from "../Comment/ICommentContent";
import Comment from "../Comment";

const TableBody: FC<{ comments: CommentContent[] }> = ({ comments }) => {
  return (
    <tbody>
      {comments?.map((comment, index) => (
        <Comment comment={comment} index={index} key={comment.id} />
      ))}
    </tbody>
  );
};
export default TableBody;
