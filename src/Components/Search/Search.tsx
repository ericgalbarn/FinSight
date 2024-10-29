import React, { SyntheticEvent, useState } from "react";

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
    <form onSubmit={onSearchSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleSearchChange}
        className="input input-bordered w-full max-w-xs"
      />
    </form>
  );
};

export default Search;
