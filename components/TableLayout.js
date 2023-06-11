"use client";

import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import dynamic from "next/dynamic";

const TableRow = dynamic(() => import("./TableRow"));

const TableLayout = ({ memos, onDelete }) => {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Recipient</th>
          <th>Date Sent</th>
          <th>Time Sent</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {memos.map((memo) => {
          return <TableRow key={memo.id} memo={memo} handleDelete={onDelete} />;
        })}
      </tbody>
    </Table>
  );
};

export default TableLayout;
