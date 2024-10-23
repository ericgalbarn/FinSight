import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type Props = {};

const Search: React.FC<Props> = (props: Props): JSX.Element => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<FormControlElement>) => {
    setSearch(e.target.value);
    console.log(e);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e);
  };
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
