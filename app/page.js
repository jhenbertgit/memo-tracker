"use client";

import FormLayout from "@/components/FormLayout";
import Header from "@/components/Header";
import { Container } from "reactstrap";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <FormLayout />
      </Container>
    </>
  );
}
