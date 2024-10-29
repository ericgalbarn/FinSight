import { SyntheticEvent } from "react";

interface Props {
  onPortfolioCreate: (e: SyntheticEvent) => void;
  symbol: string;
}

const AddPortfolio = ({ onPortfolioCreate, symbol }: Props) => {
  return (
    <form onSubmit={onPortfolioCreate}>
      <input
        readOnly={true}
        hidden={true}
        value={symbol}
        className="input w-full max-w-xs"
      />
      <button className="btn btn-active btn-accent" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddPortfolio;
