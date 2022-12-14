import React from "react";
import Col from "../Col";
import Row from "../Row";
import Lable from "./Lable";

export default function Input({ lable, type, placeholder, col, ...rest }) {
  return (
    <Row className="form-group">
      <Lable>{lable}</Lable>
      <Col className={`col-sm-${col}`}>
        <input
          className="form-control"
          type={type}
          placeholder={placeholder}
          {...rest}
        />
      </Col>
    </Row>
  );
}
