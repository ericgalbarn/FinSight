import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CompanySearch } from "../../company";

interface Props {
  id: string;
  searchResult: CompanySearch;
}

const CompanyCard: React.FC<Props> = ({
  id,
  searchResult,
}: Props): JSX.Element => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" alt="Company Logo" />
      <Card.Body>
        <Card.Title>
          ({searchResult.name}) ({searchResult.symbol})
        </Card.Title>
        <Card.Text>{searchResult.currency}</Card.Text>
        <Card.Text>
          ({searchResult.exchangeShortName}) - ({searchResult.stockExchange})
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CompanyCard;
