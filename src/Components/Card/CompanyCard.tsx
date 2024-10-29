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
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Company Logo"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center">
          ({searchResult.name}) ({searchResult.symbol})
        </h2>
        <p className="text-center	">{searchResult.currency}</p>
        <p>
          ({searchResult.exchangeShortName}) - ({searchResult.stockExchange})
        </p>
        <AddPortfolio
          onPortfolioCreate={onPortfolioCreate}
          symbol={searchResult.symbol}
        />
      </div>
    </div>
  );
};

export default CompanyCard;
