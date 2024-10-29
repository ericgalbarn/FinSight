import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

interface Props {
  onPortfolioDelete: (e: React.SyntheticEvent) => void;
  portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <div>
      <Form onSubmit={onPortfolioDelete}>
        <Form.Control hidden={true} value={portfolioValue} />
        <Button type="submit">X</Button>
      </Form>
    </div>
  );
};

export default DeletePortfolio;
