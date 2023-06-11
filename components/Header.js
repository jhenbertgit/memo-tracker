"use client";

import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const Header = () => {
  return (
    <Navbar color="secondary" dark>
      <NavbarBrand className="ps-4" href="/">
        Memo Tracker
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
