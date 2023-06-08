import React from "react";
import { Button } from "reactstrap";
import dynamic from "next/dynamic";

const StatusBadge = dynamic(() => import("./StatusBadge"));

const TableRow = ({ memo, handleDelete }) => {
  let dte = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(new Date(memo.date));
  return (
    <>
      <tr>
        <td>{memo.subject}</td>
        <td>{memo.recipient}</td>
        <td>{dte}</td>
        <td>{memo.time}</td>
        <td>
          <StatusBadge color="success">Sent</StatusBadge>
        </td>
        <td>
          <Button
            onClick={() => handleDelete(memo.id)}
            color="danger"
            size="sm"
          >
            delete
          </Button>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
