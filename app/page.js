"use client";
import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import dynamic from "next/dynamic";

const TableLayout = dynamic(() => import("@/components/TableLayout"));
const Header = dynamic(() => import("@/components/Header"));
const AddMemo = dynamic(() => import("@/components/AddMemo"));

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
  const [memos, setMemos] = useState(getLocalStorage());

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
    window.localStorage.setItem("memoData", JSON.stringify(memos));
  }, [memos]);

  let content = <p>no memoranda</p>;

  if (memos && memos.length > 0) {
    content = <TableLayout memos={memos} onDelete={deleteMemo} />;
  }

  return (
    <>
      <Header />
      <Container>
        <AddMemo addMemo={addMemo} />
        {content}
      </Container>
    </>
  );
};

export default Home;
