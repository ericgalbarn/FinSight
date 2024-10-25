import React, { SyntheticEvent, useState } from "react";
import Form from "react-bootstrap/Form";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: React.ChangeEvent<FormControlElement>) => void;
}

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchChange,
}: Props): JSX.Element => {
  return (
    <Form onSubmit={onSearchSubmit}>
      <Form.Control
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
        className=" mr-sm-2"
      />
    </Form>
  );
};

export default Search;
