import React from "react";
import Table from "../../Components/Table/Table";

interface Props {}

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>FinSight Design Page</h1>
      <h2>
        This is FinSight's design page. This is where we will house various
        design elements of the app
      </h2>
      <Table />
    </>
  );
};

export default DesignPage;
