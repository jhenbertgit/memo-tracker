import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import TableRow from "./TableRow";

const TableLayout = ({ memos }) => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Recipient</th>
          <th>Date Sent</th>
          <th>Time Sent</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <TableRow memos={memos} />
      </tbody>
    </Table>
  );
};

export default TableLayout;
