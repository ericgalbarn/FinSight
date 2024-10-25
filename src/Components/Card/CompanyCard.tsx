import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
import { SyntheticEvent } from "react";

interface Props {
  id: string;
  searchResult: CompanySearch;
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CompanyCard: React.FC<Props> = ({
  id,
  searchResult,
  onPortfolioCreate,
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
        <AddPortfolio
          onPortfolioCreate={onPortfolioCreate}
          symbol={searchResult.symbol}
        />
      </Card.Body>
    </Card>
  );
};

export default CompanyCard;
