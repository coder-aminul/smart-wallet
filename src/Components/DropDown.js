import React, { useState } from "react";
import Button from "./Button";

export default function DropDown({ className, icon, text }) {
  const [show, setShow] = useState(false);

  return (
    <div className={show ? "dropdown show" : "dropdown"}>
      <Button
        className="btn btn-primary dropdown-toggle"
        onClick={() => setShow(!show)}
      >
        <i className={icon}></i> {text}
      </Button>
      <div
        className={
          show
            ? "dropdown-menu dropdown-menu-right dropdown-menu-animated show"
            : "dropdown-menu dropdown-menu-right dropdown-menu-animated"
        }
      >
        <span className="dropdown-item">PDF</span>
        <span className="dropdown-item">Excel</span>
        <span className="dropdown-item">Word</span>
      </div>
    </div>
  );
}
