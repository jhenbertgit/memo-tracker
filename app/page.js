"use client";
import React, { useEffect, useState } from "react";

import AddMemo from "@/components/AddMemo";
import Header from "@/components/Header";
import TableLayout from "@/components/TableLayout";
import { Container } from "reactstrap";

const getLocalStorage = () => {
  if (typeof window !== "undefined") {
    let memos = window.localStorage.getItem("memoData");
    if (memos) {
      return JSON.parse(window.localStorage.getItem("memoData"));
    } else {
      return [];
    }
  }
};

const Home = () => {
  const [memos, setMemos] = useState(getLocalStorage);

  const addMemo = (memo) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newMemo = {
      id: id,
      ...memo,
    };

    setMemos([...memos, newMemo]);
  };

  const deleteMemo = (id) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("memoData", JSON.stringify(memos));
    }
  }, [memos]);

  return (
    <>
      <Header />
      <Container>
        <AddMemo addMemo={addMemo} />
        {memos.length > 0 ? (
          <TableLayout memos={memos} onDelete={deleteMemo} />
        ) : (
          <p>no memoranda</p>
        )}
      </Container>
    </>
  );
};

export default Home;
