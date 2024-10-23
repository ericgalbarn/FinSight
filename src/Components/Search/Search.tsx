import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

type Props = {};

const Search: React.FC<Props> = (props: Props): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const onClick = (e: any) => {
    setSearch(e.target.value);
    console.log(e);
  };
  return (
    <Row>
      <Col xs="auto">
        <Form.Control
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => onClick(e)}
          className=" mr-sm-2"
        />
      </Col>
      <Col xs="auto">
        <Button type="submit">Submit</Button>
      </Col>
    </Row>
  );
};

export default Search;
