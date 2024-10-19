import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const CompanyCard = ({ companyName, ticker, price }: Props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1728144691773-544f5c5577f6?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card.Body>
        <Card.Title>{companyName}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Card.Text>{ticker}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CompanyCard;
