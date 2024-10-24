import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  search: string | undefined;
  handleChange: (e: React.ChangeEvent<FormControlElement>) => void;
}

const Search: React.FC<Props> = ({
  onClick,
  search,
  handleChange,
}: Props): JSX.Element => {
  return (
    <Row>
      <Col xs="auto">
        <Form.Control
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => handleChange(e)}
          className=" mr-sm-2"
        />
      </Col>
      <Col xs="auto">
        <Button type="submit" onClick={(e) => onClick(e)}>
          Submit
        </Button>
      </Col>
    </Row>
  );
};

export default Search;
