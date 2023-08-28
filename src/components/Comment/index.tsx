import { FC } from "react";
import CommentContent from "./ICommentContent";

const Comment: FC<{ comment: CommentContent; index: number }> = ({
  comment,
  index,
}) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{comment.name}</td>
      <td>{comment.email}</td>
      <td>{comment.body}</td>
    </tr>
  );
};
export default Comment;
