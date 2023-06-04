"use client";

import React, { useEffect, useState } from "react";

import AddMemo from "@/components/AddMemo";
import Header from "@/components/Header";
import TableLayout from "@/components/TableLayout";
import { Container } from "reactstrap";

const getLocalStorage = () => {
  let memos = localStorage.getItem("memoData");
  if (memos) {
    return JSON.parse(localStorage.getItem("memoData"));
  } else {
    return [];
  }
};

export default function Home() {
  const [memos, setMemos] = useState(getLocalStorage);

  const addMemo = (memo) => {
    const newMemo = {
      ...memo,
    };

    setMemos([...memos, newMemo]);
  };

  useEffect(() => {
    localStorage.setItem("memoData", JSON.stringify(memos));
  }, [memos]);

  return (
    <>
      <Header />
      <Container>
        <AddMemo addMemo={addMemo} />
        {memos.length > 0 ? <TableLayout memos={memos} /> : <p>no memoranda</p>}
      </Container>
    </>
  );
}
