import React from "react";

const TableRow = ({ memos }) => {
  return (
    <>
      {memos.map((memo) => {
        return (
          <tr>
            <td>{memo.subject}</td>
            <td>{memo.recipient}</td>
            <td>{memo.date}</td>
            <td>{memo.time}</td>
            <td>Send</td>
          </tr>
        );
      })}
    </>
  );
};

export default TableRow;
