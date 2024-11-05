import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";

interface Props {}

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>FinSight Design Page</h1>
      <RatioList />
      <Table />
    </>
  );
};

export default DesignPage;
