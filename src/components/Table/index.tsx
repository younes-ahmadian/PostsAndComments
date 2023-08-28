import { FC } from "react";
import CommentContent from "../Comment/ICommentContent";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import styels from "./table.module.scss"

const Table: FC<{ comments: CommentContent[] }> = ({ comments }) => {
  return (
    <table className={styels.tableContainer}>
      <TableHeader />
      <TableBody comments={comments}/>
    </table>
  );
};
export default Table;
