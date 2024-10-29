import React from "react";

interface Props {
  onPortfolioDelete: (e: React.SyntheticEvent) => void;
  portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <div>
      <form onSubmit={onPortfolioDelete}>
        <input
          className="input w-full max-w-xs"
          hidden={true}
          value={portfolioValue}
        />
        <button className="btn btn-accent" type="submit">
          X
        </button>
      </form>
    </div>
  );
};

export default DeletePortfolio;
