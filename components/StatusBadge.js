"use client";

import React from "react";
import { Badge } from "reactstrap";

const StatusBadge = ({ children, color }) => {
  return (
    <Badge color={color} pill>
      {children}
    </Badge>
  );
};

export default StatusBadge;
